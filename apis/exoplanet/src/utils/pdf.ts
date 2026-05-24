import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import type Exoplanet from "../models/Exoplanet.class.js";

async function createPdfMultiple(exoplanets: Exoplanet[]) {
  const pdfDoc = await PDFDocument.create();
  const fontNormal = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

  let page = pdfDoc.addPage([595.27, 841.89]);
  const { width, height } = page.getSize();

  page.drawRectangle({
    x: 0,
    y: height - 60,
    width,
    height: 60,
    color: rgb(0.08, 0.1, 0.2), // Blue Spacial
  });

  page.drawText("Catalog of Exoplanets:", {
    x: 30,
    y: height - 40,
    size: 20,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  let currentY = height - 100;
  const paddingLeft = 30;

  for (const planet of exoplanets) {
    if (currentY < 80) {
      page = pdfDoc.addPage([595.27, 841.89]);
      currentY = height - 50;
    }

    page.drawText(`Name: ${planet._name}`, {
      x: paddingLeft,
      y: currentY,
      size: 12,
      font: fontBold,
    });

    currentY -= 18;

    page.drawText(`Description: ${planet._description} | Tag: ${planet._tag}`, {
      x: paddingLeft + 10,
      y: currentY,
      size: 10,
      font: fontNormal,
      color: rgb(0.3, 0.3, 0.3),
    });

    currentY -= 15;

    page.drawLine({
      start: {
        x: paddingLeft,
        y: currentY,
      },
      end: {
        x: width - paddingLeft,
        y: currentY,
      },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8),
    });
  }

  currentY -= 25;

  const pdfBytes = await pdfDoc.save();

  return pdfBytes;
}

async function createPdfSingle(exoplanet: Exoplanet) {
  const pdfDoc = await PDFDocument.create();
  const fontNormal = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

  let page = pdfDoc.addPage([595.27, 841.89]);
  const { width, height } = page.getSize();

  page.drawRectangle({
    x: 0,
    y: height - 60,
    width,
    height: 60,
    color: rgb(0.08, 0.1, 0.2), // Blue Spacial
  });

  page.drawText(`${exoplanet._name}`, {
    x: 40,
    y: height - 30,
    size: 30,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  let currentY = height - 100;
  const paddingLeft = 40;

  page.drawText(`Description: ${exoplanet._description}`, {
    x: paddingLeft,
    y: currentY,
    size: 10,
    font: fontNormal,
    color: rgb(0.3, 0.3, 0.3),
  });

  page.drawText(`Tag: ${exoplanet._tag}`, {
    x: paddingLeft,
    y: currentY - 20,
    size: 10,
    font: fontNormal,
    color: rgb(0.3, 0.3, 0.3),
  });

  currentY -= 40;

  page.drawLine({
    start: {
      x: paddingLeft,
      y: currentY,
    },
    end: {
      x: width - paddingLeft,
      y: currentY,
    },
    thickness: 0.5,
    color: rgb(0.8, 0.8, 0.8),
  });

  currentY -= 25;

  const pdfBytes = await pdfDoc.save();

  return pdfBytes;
}

export { createPdfMultiple, createPdfSingle };
