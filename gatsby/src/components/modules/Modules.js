import React from "react";
import styled from "styled-components";
import Audio from "./Audio";
import Blockquote from "./Blockquote";
import Headline from "./Headline";
import ImagenesDosColumnas from "./ImagenesDosColumnas";
import ImagenFullscreen from "./ImagenFullscreen";
import largeQuote from "./largeQuote";
import ParrafoColumna from "./ParrafoColumna";
import ParrafosColumnas from "./ParrafosColumnas";
import TextoImagen from "./TextoImagen";
import Video from "./Video";

const modulesArr = [
  { name: "audio", comp: Audio },
  { name: "blockquote", comp: Blockquote },
  { name: "largeQuote", comp: largeQuote },
  { name: "headline", comp: Headline },
  { name: "imagenesDosColumnas", comp: ImagenesDosColumnas },
  { name: "imagenFullscreen", comp: ImagenFullscreen },
  { name: "parrafoColumna", comp: ParrafoColumna },
  { name: "parrafosColumnas", comp: ParrafosColumnas },
  { name: "textoImagen", comp: TextoImagen },
  { name: "video", comp: Video },
];

const Modules = ({ editorialModule, props }) => {
  let final_arr = [];

  editorialModule.forEach((edMod) => {
    modulesArr.forEach((mMod) => {
      if (edMod["_type"] === mMod.name) {
        final_arr.push({ ...edMod, ...mMod });
      }
    });
  });

  return (
    <ModulesWrapper>
      {final_arr.map((Module, i) => (
        <Module.comp key={i} data={{ ...Module }} props={props} />
      ))}
    </ModulesWrapper>
  );
};

const ModulesWrapper = styled.div``;

export default Modules;