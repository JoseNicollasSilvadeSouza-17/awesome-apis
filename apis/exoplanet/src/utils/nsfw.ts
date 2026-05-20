import * as tf from "@tensorflow/tfjs";
import * as nsfw from "nsfwjs";

let model: nsfw.NSFWJS;

async function loadModel() {
  if (!model) {
    tf.enableProdMode();
    model = await nsfw.load();
  }

  return model;
}

export default loadModel;