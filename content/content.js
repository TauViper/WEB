import picture1 from "./media/images/1.jpg";
import picture2 from "./media/images/2.jpg";
import picture3 from "./media/images/3.jpg";
import picture4 from "./media/images/4.gif";
import file1 from "./media/audio/1.mp3";
import file2 from "./media/audio/2.mp3";
import file3 from "./media/audio/3.mp3";
import video1 from "./media/video/1.mp4";
import video2 from "./media/video/2.mp4";

export const content = [
  {
    type: [
      {
        picture: [
          {
            title: "Водяная мельница",
            file: picture1,
          },
          {
            title: "Холмы",
            file: picture2,
          },
          {
            title: "Крысный дом",
            file: picture3,
          },
          {
            title: "Котюня",
            file: picture4,
          },
        ],
      },
      {
        music: [
          {
            title: "Звуки леса",
            file: file1,
          },
          {
            title: "Звуки воды",
            file: file2,
          },
          {
            title: "Сверчки",
            file: file3,
          },
        ],
      },
      {
        video: [
          {
            title: "Never gonna give you",
            file: video1,
          },
          {
            title: "Океан",
            file: video2,
          },
        ],
      },
    ],
  },
];
