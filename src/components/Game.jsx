import Score from "./Score";
import { useState, useEffect, memo } from "react";
import '../styles/Game.css';

function Game({ difficulty, range }) {

    const [score, setScore] = useState({
        score: 0,
        highScore: 0,
    })
    const [data, setData] = useState({
        "data": [
          {
            "type": "gif",
            "id": "AQA06x4RNjbURCr8AJ",
            "url": "https://giphy.com/gifs/studiosoriginals-shana-tova-rosh-hashana-shanah-AQA06x4RNjbURCr8AJ",
            "slug": "studiosoriginals-shana-tova-rosh-hashana-shanah-AQA06x4RNjbURCr8AJ",
            "bitly_gif_url": "https://gph.is/g/amoVL2k",
            "bitly_url": "https://gph.is/g/amoVL2k",
            "embed_url": "https://giphy.com/embed/AQA06x4RNjbURCr8AJ",
            "username": "giphystudios2022",
            "source": "https://www.lylaribot.com/",
            "title": "Happy New Year Shana Tova GIF by GIPHY Studios 2022",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.lylaribot.com",
            "source_post_url": "https://www.lylaribot.com/",
            "is_sticker": 0,
            "import_datetime": "2022-09-13 20:57:18",
            "trending_datetime": "2024-10-02 22:36:01",
            "images": {
              "original": {
                "height": "480",
                "width": "480",
                "size": "2289455",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
                "mp4_size": "487042",
                "mp4": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/giphy.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
                "webp_size": "1000360",
                "webp": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/giphy.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
                "frames": "76",
                "hash": "eff15f72460c4d2f1fa6dfd29899abc1"
              },
              "downsized": {
                "height": "480",
                "width": "480",
                "size": "1701676",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/giphy-downsized.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g"
              },
              "downsized_large": {
                "height": "480",
                "width": "480",
                "size": "2289455",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_medium": {
                "height": "480",
                "width": "480",
                "size": "2289455",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_small": {
                "height": "306",
                "width": "306",
                "mp4_size": "94041",
                "mp4": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/giphy-downsized-small.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g"
              },
              "fixed_height_downsampled": {
                "height": "200",
                "width": "200",
                "size": "51548",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/200_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
                "webp_size": "33342",
                "webp": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/200_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
              },
              "fixed_height_small": {
                "height": "100",
                "width": "100",
                "size": "190096",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/100.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.gif&ct=g",
                "mp4_size": "50422",
                "mp4": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/100.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.mp4&ct=g",
                "webp_size": "136248",
                "webp": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/100.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.webp&ct=g"
              },
              "fixed_width_downsampled": {
                "height": "200",
                "width": "200",
                "size": "51548",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/200w_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
                "webp_size": "33342",
                "webp": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/200w_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
              },
              "fixed_width_small": {
                "height": "100",
                "width": "100",
                "size": "190096",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/100w.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.gif&ct=g",
                "mp4_size": "48538",
                "mp4": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/100w.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
                "webp_size": "136248",
                "webp": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/100w.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.webp&ct=g"
              }
            },
            "user": {
              "avatar_url": "https://media4.giphy.com/avatars/giphystudios2022/0D5oToQ2qdUz.gif",
              "banner_image": "",
              "banner_url": "",
              "profile_url": "https://giphy.com/giphystudios2022/",
              "username": "giphystudios2022",
              "display_name": "GIPHY Studios 2022",
              "description": "",
              "instagram_url": "",
              "website_url": "",
              "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9QVFBMDZ4NFJOamJVUkNyOEFKJmN0PWc",
            "analytics": {
              "onload": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9QVFBMDZ4NFJOamJVUkNyOEFKJmN0PWc&action_type=SEEN"
              },
              "onclick": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9QVFBMDZ4NFJOamJVUkNyOEFKJmN0PWc&action_type=CLICK"
              },
              "onsent": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9QVFBMDZ4NFJOamJVUkNyOEFKJmN0PWc&action_type=SENT"
              }
            },
            "alt_text": ""
          },
          {
            "type": "gif",
            "id": "T1mwiKjGsITzaWMGu4",
            "url": "https://giphy.com/gifs/rvappstudios-happy-birthday-bday-T1mwiKjGsITzaWMGu4",
            "slug": "rvappstudios-happy-birthday-bday-T1mwiKjGsITzaWMGu4",
            "bitly_gif_url": "https://gph.is/g/Zno1XpR",
            "bitly_url": "https://gph.is/g/Zno1XpR",
            "embed_url": "https://giphy.com/embed/T1mwiKjGsITzaWMGu4",
            "username": "rvappstudios",
            "source": "https://www.rvappstudios.com/",
            "title": "Happy Birthday Cake GIF by Lucas and Friends by RV AppStudios",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.rvappstudios.com",
            "source_post_url": "https://www.rvappstudios.com/",
            "is_sticker": 0,
            "import_datetime": "2024-09-09 13:20:16",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
              "original": {
                "height": "480",
                "width": "480",
                "size": "1110388",
                "url": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
                "mp4_size": "297826",
                "mp4": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/giphy.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
                "webp_size": "862988",
                "webp": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/giphy.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
                "frames": "40",
                "hash": "319c5d338e6258cc279f2db4bd9573a0"
              },
              "downsized": {
                "height": "480",
                "width": "480",
                "size": "1110388",
                "url": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_large": {
                "height": "480",
                "width": "480",
                "size": "1110388",
                "url": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_medium": {
                "height": "480",
                "width": "480",
                "size": "1110388",
                "url": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_small": {
                "height": "400",
                "width": "400",
                "mp4_size": "177634",
                "mp4": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/giphy-downsized-small.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g"
              },
              "fixed_height_downsampled": {
                "height": "200",
                "width": "200",
                "size": "86022",
                "url": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/200_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
                "webp_size": "78426",
                "webp": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/200_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
              },
              "fixed_height_small": {
                "height": "100",
                "width": "100",
                "size": "132029",
                "url": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/100.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.gif&ct=g",
                "mp4_size": "34938",
                "mp4": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/100.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.mp4&ct=g",
                "webp_size": "133576",
                "webp": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/100.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.webp&ct=g"
              },
              "fixed_width_downsampled": {
                "height": "200",
                "width": "200",
                "size": "86022",
                "url": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/200w_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
                "webp_size": "78426",
                "webp": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/200w_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
              },
              "fixed_width_small": {
                "height": "100",
                "width": "100",
                "size": "132029",
                "url": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/100w.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.gif&ct=g",
                "mp4_size": "34938",
                "mp4": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/100w.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
                "webp_size": "133576",
                "webp": "https://media0.giphy.com/media/T1mwiKjGsITzaWMGu4/100w.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.webp&ct=g"
              }
            },
            "user": {
              "avatar_url": "https://media4.giphy.com/avatars/rvappstudios/0ax9ZCLRtVSK.jpg",
              "banner_image": "https://media4.giphy.com/channel_assets/rvappstudios/OO67KPR3kRBn.jpg",
              "banner_url": "https://media4.giphy.com/channel_assets/rvappstudios/OO67KPR3kRBn.jpg",
              "profile_url": "https://giphy.com/rvappstudios/",
              "username": "rvappstudios",
              "display_name": "Lucas and Friends by RV AppStudios",
              "description": "Lucas & Friends By RV AppStudios created free educational apps, nursery rhymes and kids songs on YouTube, children's books, and more. Over 30 million kids use our educational apps every month for free!",
              "instagram_url": "https://instagram.com/rvappstudios",
              "website_url": "http://www.rvappstudios.com",
              "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9VDFtd2lLakdzSVR6YVdNR3U0JmN0PWc",
            "analytics": {
              "onload": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9VDFtd2lLakdzSVR6YVdNR3U0JmN0PWc&action_type=SEEN"
              },
              "onclick": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9VDFtd2lLakdzSVR6YVdNR3U0JmN0PWc&action_type=CLICK"
              },
              "onsent": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9VDFtd2lLakdzSVR6YVdNR3U0JmN0PWc&action_type=SENT"
              }
            },
            "alt_text": ""
          },
          {
            "type": "gif",
            "id": "3edl90xtJ38Dv92kHt",
            "url": "https://giphy.com/gifs/pbsnewshour-pbs-newshour-news-vp-debate-3edl90xtJ38Dv92kHt",
            "slug": "pbsnewshour-pbs-newshour-news-vp-debate-3edl90xtJ38Dv92kHt",
            "bitly_gif_url": "https://gph.is/g/4oYReOL",
            "bitly_url": "https://gph.is/g/4oYReOL",
            "embed_url": "https://giphy.com/embed/3edl90xtJ38Dv92kHt",
            "username": "pbsnewshour",
            "source": "",
            "title": "Vp Debate Midwestern GIF by PBS News",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2024-10-02 03:16:00",
            "trending_datetime": "2024-10-02 03:45:17",
            "images": {
              "original": {
                "height": "264",
                "width": "480",
                "size": "1443604",
                "url": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
                "mp4_size": "206571",
                "mp4": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/giphy.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
                "webp_size": "477820",
                "webp": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/giphy.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
                "frames": "51",
                "hash": "e0a228974557ed9150e25c85bf56e585"
              },
              "downsized": {
                "height": "264",
                "width": "480",
                "size": "1443604",
                "url": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_large": {
                "height": "264",
                "width": "480",
                "size": "1443604",
                "url": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_medium": {
                "height": "264",
                "width": "480",
                "size": "1443604",
                "url": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_small": {
                "height": "220",
                "width": "398",
                "mp4_size": "184825",
                "mp4": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/giphy-downsized-small.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g"
              },
              "fixed_height_downsampled": {
                "height": "200",
                "width": "362",
                "size": "110332",
                "url": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/200_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
                "webp_size": "69730",
                "webp": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/200_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
              },
              "fixed_height_small": {
                "height": "100",
                "width": "182",
                "size": "267068",
                "url": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/100.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.gif&ct=g",
                "mp4_size": "50106",
                "mp4": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/100.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.mp4&ct=g",
                "webp_size": "119944",
                "webp": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/100.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.webp&ct=g"
              },
              "fixed_width_downsampled": {
                "height": "110",
                "width": "200",
                "size": "41259",
                "url": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/200w_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
                "webp_size": "28480",
                "webp": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/200w_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
              },
              "fixed_width_small": {
                "height": "56",
                "width": "100",
                "size": "104025",
                "url": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/100w.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.gif&ct=g",
                "mp4_size": "23098",
                "mp4": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/100w.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
                "webp_size": "55392",
                "webp": "https://media0.giphy.com/media/3edl90xtJ38Dv92kHt/100w.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.webp&ct=g"
              }
            },
            "user": {
              "avatar_url": "https://media4.giphy.com/avatars/pbsnewshour/zEjm94TN0sqX.png",
              "banner_image": "https://media4.giphy.com/channel_assets/pbsnewshour/KhJdjP1D9eJp.png",
              "banner_url": "https://media4.giphy.com/channel_assets/pbsnewshour/KhJdjP1D9eJp.png",
              "profile_url": "https://giphy.com/pbsnewshour/",
              "username": "pbsnewshour",
              "display_name": "PBS News",
              "description": "Follow PBS News for daily, breaking and live news, plus special coverage. Home of the PBS News Hour, PBS News Weekend and Washington Week with The Atlantic",
              "instagram_url": "https://instagram.com/newshour",
              "website_url": "http://www.pbs.org/newshour",
              "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9M2VkbDkweHRKMzhEdjkya0h0JmN0PWc",
            "analytics": {
              "onload": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9M2VkbDkweHRKMzhEdjkya0h0JmN0PWc&action_type=SEEN"
              },
              "onclick": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9M2VkbDkweHRKMzhEdjkya0h0JmN0PWc&action_type=CLICK"
              },
              "onsent": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9M2VkbDkweHRKMzhEdjkya0h0JmN0PWc&action_type=SENT"
              }
            },
            "alt_text": ""
          },
          {
            "type": "gif",
            "id": "AQA06x4RNjbURCr8AJ",
            "url": "https://giphy.com/gifs/studiosoriginals-shana-tova-rosh-hashana-shanah-AQA06x4RNjbURCr8AJ",
            "slug": "studiosoriginals-shana-tova-rosh-hashana-shanah-AQA06x4RNjbURCr8AJ",
            "bitly_gif_url": "https://gph.is/g/amoVL2k",
            "bitly_url": "https://gph.is/g/amoVL2k",
            "embed_url": "https://giphy.com/embed/AQA06x4RNjbURCr8AJ",
            "username": "giphystudios2022",
            "source": "https://www.lylaribot.com/",
            "title": "Happy New Year Shana Tova GIF by GIPHY Studios 2022",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.lylaribot.com",
            "source_post_url": "https://www.lylaribot.com/",
            "is_sticker": 0,
            "import_datetime": "2022-09-13 20:57:18",
            "trending_datetime": "2024-10-02 22:36:01",
            "images": {
              "original": {
                "height": "480",
                "width": "480",
                "size": "2289455",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
                "mp4_size": "487042",
                "mp4": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/giphy.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
                "webp_size": "1000360",
                "webp": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/giphy.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
                "frames": "76",
                "hash": "eff15f72460c4d2f1fa6dfd29899abc1"
              },
              "downsized": {
                "height": "480",
                "width": "480",
                "size": "1701676",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/giphy-downsized.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g"
              },
              "downsized_large": {
                "height": "480",
                "width": "480",
                "size": "2289455",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_medium": {
                "height": "480",
                "width": "480",
                "size": "2289455",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_small": {
                "height": "306",
                "width": "306",
                "mp4_size": "94041",
                "mp4": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/giphy-downsized-small.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g"
              },
              "fixed_height_downsampled": {
                "height": "200",
                "width": "200",
                "size": "51548",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/200_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
                "webp_size": "33342",
                "webp": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/200_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
              },
              "fixed_height_small": {
                "height": "100",
                "width": "100",
                "size": "190096",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/100.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.gif&ct=g",
                "mp4_size": "50422",
                "mp4": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/100.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.mp4&ct=g",
                "webp_size": "136248",
                "webp": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/100.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.webp&ct=g"
              },
              "fixed_width_downsampled": {
                "height": "200",
                "width": "200",
                "size": "51548",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/200w_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
                "webp_size": "33342",
                "webp": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/200w_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
              },
              "fixed_width_small": {
                "height": "100",
                "width": "100",
                "size": "190096",
                "url": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/100w.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.gif&ct=g",
                "mp4_size": "48538",
                "mp4": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/100w.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
                "webp_size": "136248",
                "webp": "https://media0.giphy.com/media/AQA06x4RNjbURCr8AJ/100w.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.webp&ct=g"
              }
            },
            "user": {
              "avatar_url": "https://media4.giphy.com/avatars/giphystudios2022/0D5oToQ2qdUz.gif",
              "banner_image": "",
              "banner_url": "",
              "profile_url": "https://giphy.com/giphystudios2022/",
              "username": "giphystudios2022",
              "display_name": "GIPHY Studios 2022",
              "description": "",
              "instagram_url": "",
              "website_url": "",
              "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9QVFBMDZ4NFJOamJVUkNyOEFKJmN0PWc",
            "analytics": {
              "onload": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9QVFBMDZ4NFJOamJVUkNyOEFKJmN0PWc&action_type=SEEN"
              },
              "onclick": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9QVFBMDZ4NFJOamJVUkNyOEFKJmN0PWc&action_type=CLICK"
              },
              "onsent": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9QVFBMDZ4NFJOamJVUkNyOEFKJmN0PWc&action_type=SENT"
              }
            },
            "alt_text": ""
          },
          {
            "type": "gif",
            "id": "oC5wdBasvtrGQfuQCD",
            "url": "https://giphy.com/gifs/pudgypenguins-happy-new-year-jewish-rosh-hashanah-oC5wdBasvtrGQfuQCD",
            "slug": "pudgypenguins-happy-new-year-jewish-rosh-hashanah-oC5wdBasvtrGQfuQCD",
            "bitly_gif_url": "https://gph.is/g/ampdew5",
            "bitly_url": "https://gph.is/g/ampdew5",
            "embed_url": "https://giphy.com/embed/oC5wdBasvtrGQfuQCD",
            "username": "pudgypenguins",
            "source": "",
            "title": "Happy New Year Penguin GIF by Pudgy Penguins",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2024-09-01 10:14:31",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
              "original": {
                "height": "480",
                "width": "480",
                "size": "54414",
                "url": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
                "mp4_size": "41720",
                "mp4": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/giphy.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
                "webp_size": "34974",
                "webp": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/giphy.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
                "frames": "8",
                "hash": "cc9203485b7bb207f846883312e1d0ff"
              },
              "downsized": {
                "height": "480",
                "width": "480",
                "size": "54414",
                "url": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_large": {
                "height": "480",
                "width": "480",
                "size": "54414",
                "url": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_medium": {
                "height": "480",
                "width": "480",
                "size": "54414",
                "url": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_small": {
                "height": "480",
                "width": "480",
                "mp4_size": "41720",
                "mp4": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/giphy-downsized-small.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g"
              },
              "fixed_height_downsampled": {
                "height": "200",
                "width": "200",
                "size": "13467",
                "url": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/200_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
                "webp_size": "10842",
                "webp": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/200_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
              },
              "fixed_height_small": {
                "height": "100",
                "width": "100",
                "size": "5759",
                "url": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/100.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.gif&ct=g",
                "mp4_size": "5713",
                "mp4": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/100.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.mp4&ct=g",
                "webp_size": "3798",
                "webp": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/100.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.webp&ct=g"
              },
              "fixed_width_downsampled": {
                "height": "200",
                "width": "200",
                "size": "13467",
                "url": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/200w_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
                "webp_size": "10842",
                "webp": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/200w_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
              },
              "fixed_width_small": {
                "height": "100",
                "width": "100",
                "size": "5759",
                "url": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/100w.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.gif&ct=g",
                "mp4_size": "5713",
                "mp4": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/100w.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
                "webp_size": "3798",
                "webp": "https://media4.giphy.com/media/oC5wdBasvtrGQfuQCD/100w.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.webp&ct=g"
              }
            },
            "user": {
              "avatar_url": "https://media4.giphy.com/avatars/pudgypenguins/R2B3rW5AF4rb.jpg",
              "banner_image": "https://media4.giphy.com/channel_assets/pudgypenguins/6l4hlTSrpMxk.png",
              "banner_url": "https://media4.giphy.com/channel_assets/pudgypenguins/6l4hlTSrpMxk.png",
              "profile_url": "https://giphy.com/pudgypenguins/",
              "username": "pudgypenguins",
              "display_name": "Pudgy Penguins",
              "description": "The Pudgy Penguins waddle through the internet to supply unlimited memes & good vibes.",
              "instagram_url": "https://instagram.com/pudgypenguins",
              "website_url": "http://pudgypenguins.com/",
              "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9b0M1d2RCYXN2dHJHUWZ1UUNEJmN0PWc",
            "analytics": {
              "onload": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9b0M1d2RCYXN2dHJHUWZ1UUNEJmN0PWc&action_type=SEEN"
              },
              "onclick": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9b0M1d2RCYXN2dHJHUWZ1UUNEJmN0PWc&action_type=CLICK"
              },
              "onsent": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9b0M1d2RCYXN2dHJHUWZ1UUNEJmN0PWc&action_type=SENT"
              }
            },
            "alt_text": ""
          },
          {
            "type": "gif",
            "id": "8nmvR3jAxnl2o",
            "url": "https://giphy.com/gifs/cult-download-8nmvR3jAxnl2o",
            "slug": "cult-download-8nmvR3jAxnl2o",
            "bitly_gif_url": "http://gph.is/1d4wtzp",
            "bitly_url": "http://gph.is/1d4wtzp",
            "embed_url": "https://giphy.com/embed/8nmvR3jAxnl2o",
            "username": "wwe",
            "source": "http://wwe.com",
            "title": "Excited Ultimate Warrior GIF by WWE",
            "rating": "pg",
            "content_url": "",
            "source_tld": "wwe.com",
            "source_post_url": "http://wwe.com",
            "is_sticker": 0,
            "import_datetime": "2015-06-18 20:51:37",
            "trending_datetime": "2018-09-30 08:00:02",
            "images": {
              "original": {
                "height": "180",
                "width": "300",
                "size": "177597",
                "url": "https://media2.giphy.com/media/8nmvR3jAxnl2o/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
                "mp4_size": "75755",
                "mp4": "https://media2.giphy.com/media/8nmvR3jAxnl2o/giphy.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
                "webp_size": "54928",
                "webp": "https://media2.giphy.com/media/8nmvR3jAxnl2o/giphy.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
                "frames": "8",
                "hash": "5930127046e5007c4c686d69cc1450cf"
              },
              "downsized": {
                "height": "180",
                "width": "300",
                "size": "177597",
                "url": "https://media2.giphy.com/media/8nmvR3jAxnl2o/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_large": {
                "height": "180",
                "width": "300",
                "size": "177597",
                "url": "https://media2.giphy.com/media/8nmvR3jAxnl2o/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_medium": {
                "height": "180",
                "width": "300",
                "size": "177597",
                "url": "https://media2.giphy.com/media/8nmvR3jAxnl2o/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_small": {
                "height": "90",
                "width": "150",
                "mp4_size": "17893",
                "mp4": "https://media2.giphy.com/media/8nmvR3jAxnl2o/giphy-downsized-small.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g"
              },
              "fixed_height_downsampled": {
                "height": "200",
                "width": "334",
                "size": "108424",
                "url": "https://media2.giphy.com/media/8nmvR3jAxnl2o/200_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
                "webp_size": "69336",
                "webp": "https://media2.giphy.com/media/8nmvR3jAxnl2o/200_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
              },
              "fixed_height_small": {
                "height": "100",
                "width": "164",
                "size": "49103",
                "url": "https://media2.giphy.com/media/8nmvR3jAxnl2o/100.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.gif&ct=g",
                "mp4_size": "23602",
                "mp4": "https://media2.giphy.com/media/8nmvR3jAxnl2o/100.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.mp4&ct=g",
                "webp_size": "16970",
                "webp": "https://media2.giphy.com/media/8nmvR3jAxnl2o/100.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.webp&ct=g"
              },
              "fixed_width_downsampled": {
                "height": "120",
                "width": "200",
                "size": "46702",
                "url": "https://media2.giphy.com/media/8nmvR3jAxnl2o/200w_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
                "webp_size": "29886",
                "webp": "https://media2.giphy.com/media/8nmvR3jAxnl2o/200w_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
              },
              "fixed_width_small": {
                "height": "60",
                "width": "100",
                "size": "22871",
                "url": "https://media2.giphy.com/media/8nmvR3jAxnl2o/100w.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.gif&ct=g",
                "mp4_size": "10957",
                "mp4": "https://media2.giphy.com/media/8nmvR3jAxnl2o/100w.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
                "webp_size": "8732",
                "webp": "https://media2.giphy.com/media/8nmvR3jAxnl2o/100w.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.webp&ct=g"
              }
            },
            "user": {
              "avatar_url": "https://media4.giphy.com/avatars/wwe/kFThSppSrHym.jpg",
              "banner_image": "https://media4.giphy.com/channel_assets/wwe/38UPriouhPQJ.jpg",
              "banner_url": "https://media4.giphy.com/channel_assets/wwe/38UPriouhPQJ.jpg",
              "profile_url": "https://giphy.com/wwe/",
              "username": "wwe",
              "display_name": "WWE",
              "description": "Jump off the top rope and into a trove of WWE GIFs featuring your favorite WWE moments, matches and Superstars - past and present - including John Cena, The Rock, Roman Reigns, The Ultimate Warrior, “Stone Cold” Steve Austin, “Macho Man” Randy Savage and more!",
              "instagram_url": "https://instagram.com/wwe",
              "website_url": "http://www.wwe.com",
              "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9OG5tdlIzakF4bmwybyZjdD1n",
            "analytics": {
              "onload": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9OG5tdlIzakF4bmwybyZjdD1n&action_type=SEEN"
              },
              "onclick": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9OG5tdlIzakF4bmwybyZjdD1n&action_type=CLICK"
              },
              "onsent": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9OG5tdlIzakF4bmwybyZjdD1n&action_type=SENT"
              }
            },
            "alt_text": "TV gif. A shirtless WWE wrestler pulls angrily on a rope around a boxing ring as if he has had enough. "
          },
          {
            "type": "gif",
            "id": "R6gvnAxj2ISzJdbA63",
            "url": "https://giphy.com/gifs/warnerbrosde-R6gvnAxj2ISzJdbA63",
            "slug": "warnerbrosde-R6gvnAxj2ISzJdbA63",
            "bitly_gif_url": "https://gph.is/g/ZYbwj3n",
            "bitly_url": "https://gph.is/g/ZYbwj3n",
            "embed_url": "https://giphy.com/embed/R6gvnAxj2ISzJdbA63",
            "username": "warnerbrosde",
            "source": "",
            "title": "Happy I Love You GIF by Warner Bros. Deutschland",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2021-10-26 12:40:40",
            "trending_datetime": "2022-01-25 16:00:11",
            "images": {
              "original": {
                "height": "450",
                "width": "450",
                "size": "7187332",
                "url": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
                "mp4_size": "1262952",
                "mp4": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
                "webp_size": "2524544",
                "webp": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
                "frames": "112",
                "hash": "1e4703dfcd30e54187ced44b29883f8d"
              },
              "downsized": {
                "height": "288",
                "width": "288",
                "size": "1862016",
                "url": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy-downsized.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g"
              },
              "downsized_large": {
                "height": "450",
                "width": "450",
                "size": "7187332",
                "url": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_medium": {
                "height": "360",
                "width": "360",
                "size": "3876508",
                "url": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy-downsized-medium.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized-medium.gif&ct=g"
              },
              "downsized_small": {
                "height": "400",
                "width": "400",
                "mp4_size": "199679",
                "mp4": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy-downsized-small.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g"
              },
              "fixed_height_downsampled": {
                "height": "200",
                "width": "200",
                "size": "78654",
                "url": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/200_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
                "webp_size": "55692",
                "webp": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/200_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
              },
              "fixed_height_small": {
                "height": "100",
                "width": "100",
                "size": "504217",
                "url": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/100.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.gif&ct=g",
                "mp4_size": "71467",
                "mp4": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/100.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.mp4&ct=g",
                "webp_size": "219430",
                "webp": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/100.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.webp&ct=g"
              },
              "fixed_width_downsampled": {
                "height": "200",
                "width": "200",
                "size": "78654",
                "url": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/200w_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
                "webp_size": "55692",
                "webp": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/200w_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
              },
              "fixed_width_small": {
                "height": "100",
                "width": "100",
                "size": "504217",
                "url": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/100w.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.gif&ct=g",
                "mp4_size": "71467",
                "mp4": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/100w.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
                "webp_size": "219430",
                "webp": "https://media1.giphy.com/media/R6gvnAxj2ISzJdbA63/100w.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.webp&ct=g"
              }
            },
            "user": {
              "avatar_url": "https://media4.giphy.com/avatars/warnerbrosde/iL0YFIHzBvuh.gif",
              "banner_image": "https://media4.giphy.com/headers/warnerbrosde/Xs9AA4cRaH2z.png",
              "banner_url": "https://media4.giphy.com/headers/warnerbrosde/Xs9AA4cRaH2z.png",
              "profile_url": "https://giphy.com/warnerbrosde/",
              "username": "warnerbrosde",
              "display_name": "Warner Bros. Deutschland",
              "description": "Willkommen auf dem offiziellen Warner Bros. Giphy-Kanal. Hier findest du alle Antworten. Natürlich mit Szenen aus den neuesten Kinofilmen von Warner Bros. Entertainment!",
              "instagram_url": "https://instagram.com/warnerbrosde",
              "website_url": "http://www.warnerbros.de",
              "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9UjZndm5BeGoySVN6SmRiQTYzJmN0PWc",
            "analytics": {
              "onload": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9UjZndm5BeGoySVN6SmRiQTYzJmN0PWc&action_type=SEEN"
              },
              "onclick": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9UjZndm5BeGoySVN6SmRiQTYzJmN0PWc&action_type=CLICK"
              },
              "onsent": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9UjZndm5BeGoySVN6SmRiQTYzJmN0PWc&action_type=SENT"
              }
            },
            "alt_text": "Celebrity gif. Jason Momoa looks at us with a warm smile as he forms his hands into a heart shape. He then places his hands under his chin before going back to forming the heart."
          },
          {
            "type": "gif",
            "id": "tHIRLHtNwxpjIFqPdV",
            "url": "https://giphy.com/gifs/justin-raccoon-pedro-tHIRLHtNwxpjIFqPdV",
            "slug": "justin-raccoon-pedro-tHIRLHtNwxpjIFqPdV",
            "bitly_gif_url": "https://gph.is/g/Zkp88Mm",
            "bitly_url": "https://gph.is/g/Zkp88Mm",
            "embed_url": "https://giphy.com/embed/tHIRLHtNwxpjIFqPdV",
            "username": "justin",
            "source": "https://www.youtube.com/watch?v=uHQ1w7XckNo",
            "title": "Happy My Song GIF by Justin",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.youtube.com",
            "source_post_url": "https://www.youtube.com/watch?v=uHQ1w7XckNo",
            "is_sticker": 0,
            "import_datetime": "2024-04-16 19:41:31",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
              "original": {
                "height": "240",
                "width": "240",
                "size": "2250813",
                "url": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
                "mp4_size": "1116889",
                "mp4": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/giphy.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
                "webp_size": "2335324",
                "webp": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/giphy.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
                "frames": "198",
                "hash": "a095b7e80a329d99cdccc7c185381b42"
              },
              "downsized": {
                "height": "240",
                "width": "240",
                "size": "988996",
                "url": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/giphy-downsized.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g"
              },
              "downsized_large": {
                "height": "240",
                "width": "240",
                "size": "2250813",
                "url": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_medium": {
                "height": "240",
                "width": "240",
                "size": "2250813",
                "url": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_small": {
                "height": "240",
                "width": "240",
                "mp4_size": "197091",
                "mp4": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/giphy-downsized-small.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g"
              },
              "fixed_height_downsampled": {
                "height": "200",
                "width": "200",
                "size": "96521",
                "url": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/200_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
                "webp_size": "48910",
                "webp": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/200_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
              },
              "fixed_height_small": {
                "height": "100",
                "width": "100",
                "size": "905653",
                "url": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/100.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.gif&ct=g",
                "mp4_size": "164880",
                "mp4": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/100.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.mp4&ct=g",
                "webp_size": "350984",
                "webp": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/100.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.webp&ct=g"
              },
              "fixed_width_downsampled": {
                "height": "200",
                "width": "200",
                "size": "96521",
                "url": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/200w_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
                "webp_size": "48910",
                "webp": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/200w_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
              },
              "fixed_width_small": {
                "height": "100",
                "width": "100",
                "size": "905653",
                "url": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/100w.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.gif&ct=g",
                "mp4_size": "164880",
                "mp4": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/100w.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
                "webp_size": "350984",
                "webp": "https://media2.giphy.com/media/tHIRLHtNwxpjIFqPdV/100w.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.webp&ct=g"
              }
            },
            "user": {
              "avatar_url": "https://media4.giphy.com/avatars/justin/Ym9RjQrTsFKT.gif",
              "banner_image": "https://media4.giphy.com/channel_assets/justino/c3v3Q6fKnSeR.gif",
              "banner_url": "https://media4.giphy.com/channel_assets/justino/c3v3Q6fKnSeR.gif",
              "profile_url": "https://giphy.com/justin/",
              "username": "justin",
              "display_name": "Justin",
              "description": "Don't tell it to me, GIF it to me!",
              "instagram_url": "",
              "website_url": "",
              "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9dEhJUkxIdE53eHBqSUZxUGRWJmN0PWc",
            "analytics": {
              "onload": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9dEhJUkxIdE53eHBqSUZxUGRWJmN0PWc&action_type=SEEN"
              },
              "onclick": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9dEhJUkxIdE53eHBqSUZxUGRWJmN0PWc&action_type=CLICK"
              },
              "onsent": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9dEhJUkxIdE53eHBqSUZxUGRWJmN0PWc&action_type=SENT"
              }
            },
            "alt_text": "Video gif. Low angle as if looking up from the bottom of a well, of a raccoon bopping their head to the beat, dancing around in a circle. "
          },
          {
            "type": "gif",
            "id": "14c0YMK7oEVs0o",
            "url": "https://giphy.com/gifs/female-viagra-regulators-14c0YMK7oEVs0o",
            "slug": "female-viagra-regulators-14c0YMK7oEVs0o",
            "bitly_gif_url": "http://gph.is/1WDZjcU",
            "bitly_url": "http://gph.is/1WDZjcU",
            "embed_url": "https://giphy.com/embed/14c0YMK7oEVs0o",
            "username": "",
            "source": "http://www.rappler.com/thewrap/daily-news-highlights-august-19-2015-edition/us-regulators-ok-female-viagra",
            "title": "Iphone Waiting GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.rappler.com",
            "source_post_url": "http://www.rappler.com/thewrap/daily-news-highlights-august-19-2015-edition/us-regulators-ok-female-viagra",
            "is_sticker": 0,
            "import_datetime": "2015-08-19 09:01:37",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
              "original": {
                "height": "270",
                "width": "480",
                "size": "38900",
                "url": "https://media3.giphy.com/media/14c0YMK7oEVs0o/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
                "mp4_size": "27763",
                "mp4": "https://media3.giphy.com/media/14c0YMK7oEVs0o/giphy.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
                "webp_size": "15626",
                "webp": "https://media3.giphy.com/media/14c0YMK7oEVs0o/giphy.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
                "frames": "12",
                "hash": "d75c63c8d3ed7e2714f3bfebb3381c9f"
              },
              "downsized": {
                "height": "270",
                "width": "480",
                "size": "38900",
                "url": "https://media3.giphy.com/media/14c0YMK7oEVs0o/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_large": {
                "height": "270",
                "width": "480",
                "size": "38900",
                "url": "https://media3.giphy.com/media/14c0YMK7oEVs0o/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_medium": {
                "height": "270",
                "width": "480",
                "size": "38900",
                "url": "https://media3.giphy.com/media/14c0YMK7oEVs0o/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
              },
              "downsized_small": {
                "height": "270",
                "width": "480",
                "mp4_size": "27763",
                "mp4": "https://media3.giphy.com/media/14c0YMK7oEVs0o/giphy-downsized-small.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g"
              },
              "fixed_height_downsampled": {
                "height": "200",
                "width": "356",
                "size": "17544",
                "url": "https://media3.giphy.com/media/14c0YMK7oEVs0o/200_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
                "webp_size": "10204",
                "webp": "https://media3.giphy.com/media/14c0YMK7oEVs0o/200_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
              },
              "fixed_height_small": {
                "height": "100",
                "width": "178",
                "size": "7614",
                "url": "https://media3.giphy.com/media/14c0YMK7oEVs0o/100.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.gif&ct=g",
                "mp4_size": "6828",
                "mp4": "https://media3.giphy.com/media/14c0YMK7oEVs0o/100.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.mp4&ct=g",
                "webp_size": "4878",
                "webp": "https://media3.giphy.com/media/14c0YMK7oEVs0o/100.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.webp&ct=g"
              },
              "fixed_width_downsampled": {
                "height": "113",
                "width": "200",
                "size": "7400",
                "url": "https://media3.giphy.com/media/14c0YMK7oEVs0o/200w_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
                "webp_size": "4776",
                "webp": "https://media3.giphy.com/media/14c0YMK7oEVs0o/200w_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
              },
              "fixed_width_small": {
                "height": "57",
                "width": "100",
                "size": "4148",
                "url": "https://media3.giphy.com/media/14c0YMK7oEVs0o/100w.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.gif&ct=g",
                "mp4_size": "3738",
                "mp4": "https://media3.giphy.com/media/14c0YMK7oEVs0o/100w.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
                "webp_size": "2870",
                "webp": "https://media3.giphy.com/media/14c0YMK7oEVs0o/100w.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.webp&ct=g"
              }
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9MTRjMFlNSzdvRVZzMG8mY3Q9Zw",
            "analytics": {
              "onload": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9MTRjMFlNSzdvRVZzMG8mY3Q9Zw&action_type=SEEN"
              },
              "onclick": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9MTRjMFlNSzdvRVZzMG8mY3Q9Zw&action_type=CLICK"
              },
              "onsent": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9MTRjMFlNSzdvRVZzMG8mY3Q9Zw&action_type=SENT"
              }
            },
            "alt_text": ""
          },
          {
            "type": "gif",
            "id": "SR270Utcu28I7hL9Z6",
            "url": "https://giphy.com/gifs/studiosoriginals-goth-gothidays-SR270Utcu28I7hL9Z6",
            "slug": "studiosoriginals-goth-gothidays-SR270Utcu28I7hL9Z6",
            "bitly_gif_url": "https://gph.is/g/46zNmrV",
            "bitly_url": "https://gph.is/g/46zNmrV",
            "embed_url": "https://giphy.com/embed/SR270Utcu28I7hL9Z6",
            "username": "giphystudios2021",
            "source": "",
            "title": "Happy Birthday GIF by GIPHY Studios 2021",
            "rating": "pg",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2021-09-30 20:20:37",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
              "original": {
                "height": "360",
                "width": "480",
                "size": "14677104",
                "url": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/giphy.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
                "mp4_size": "2260789",
                "mp4": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/giphy.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
                "webp_size": "4058852",
                "webp": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/giphy.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
                "frames": "225",
                "hash": "ef82779869625e41ed28c737f694e0e6"
              },
              "downsized": {
                "height": "226",
                "width": "302",
                "size": "1715153",
                "url": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/giphy-downsized.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g"
              },
              "downsized_large": {
                "height": "288",
                "width": "384",
                "size": "6105102",
                "url": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/giphy-downsized-large.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized-large.gif&ct=g"
              },
              "downsized_medium": {
                "height": "288",
                "width": "384",
                "size": "4140827",
                "url": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/giphy-downsized-medium.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized-medium.gif&ct=g"
              },
              "downsized_small": {
                "height": "216",
                "width": "288",
                "mp4_size": "185564",
                "mp4": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/giphy-downsized-small.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g"
              },
              "fixed_height_downsampled": {
                "height": "200",
                "width": "266",
                "size": "93264",
                "url": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/200_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
                "webp_size": "64478",
                "webp": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/200_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200_d.webp&ct=g"
              },
              "fixed_height_small": {
                "height": "100",
                "width": "134",
                "size": "1423536",
                "url": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/100.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.gif&ct=g",
                "mp4_size": "307658",
                "mp4": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/100.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.mp4&ct=g",
                "webp_size": "611162",
                "webp": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/100.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100.webp&ct=g"
              },
              "fixed_width_downsampled": {
                "height": "150",
                "width": "200",
                "size": "61809",
                "url": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/200w_d.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
                "webp_size": "40488",
                "webp": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/200w_d.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=200w_d.webp&ct=g"
              },
              "fixed_width_small": {
                "height": "76",
                "width": "100",
                "size": "862083",
                "url": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/100w.gif?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.gif&ct=g",
                "mp4_size": "195406",
                "mp4": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/100w.mp4?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
                "webp_size": "396226",
                "webp": "https://media4.giphy.com/media/SR270Utcu28I7hL9Z6/100w.webp?cid=53458fe5v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj&ep=v1_gifs_trending&rid=100w.webp&ct=g"
              }
            },
            "user": {
              "avatar_url": "https://media4.giphy.com/avatars/giphystudios2021/8cVnTy1yt6Sf.gif",
              "banner_image": "",
              "banner_url": "",
              "profile_url": "https://giphy.com/giphystudios2021/",
              "username": "giphystudios2021",
              "display_name": "GIPHY Studios 2021",
              "description": "",
              "instagram_url": "",
              "website_url": "",
              "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9U1IyNzBVdGN1MjhJN2hMOVo2JmN0PWc",
            "analytics": {
              "onload": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9U1IyNzBVdGN1MjhJN2hMOVo2JmN0PWc&action_type=SEEN"
              },
              "onclick": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9U1IyNzBVdGN1MjhJN2hMOVo2JmN0PWc&action_type=CLICK"
              },
              "onsent": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfVFJFTkRJTkcmY2lkPTUzNDU4ZmU1djVsejhiZ2sxaWNibzAwaHFxYnloZWdicnF5NXR6cDk0OTRmOW5kaiZnaWZfaWQ9U1IyNzBVdGN1MjhJN2hMOVo2JmN0PWc&action_type=SENT"
              }
            },
            "alt_text": ""
          }
        ],
        "meta": {
          "status": 200,
          "msg": "OK",
          "response_id": "v5lz8bgk1icbo00hqqbyhegbrqy5tzp9494f9ndj"
        },
        "pagination": {
          "total_count": 500,
          "count": 10,
          "offset": 0
        }
      });
    const [restart, setRestart] = useState(false)
    const [memory, setMemory] = useState([])
    const array = shuffle(data.data)

    const key = import.meta.env.VITE_API_KEY;

      useEffect(() => {
   
//    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=${limit}&offset=0&rating=g&bundle=messaging_non_clips`)

    //     .then(response => response.json())
    //     .then(json => {
    //             setData(json)       
    //     })
      
     
//    
 }, [range]) 

    function shuffle(array) {
        let currentIndex = array.length;
        let newArray = array
        while(currentIndex !=0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [newArray[currentIndex], newArray[randomIndex]] = [
                newArray[randomIndex], newArray[currentIndex]];
        }
        return newArray
    }

    function gameOver() {
        console.log("over")
        if(score.highScore < score.score) {
            setScore({score: 0, highScore: score.score})
        }else {
            setScore({...score, score: 0})
        }

        setMemory([])
        //const endDisplay = document.querySelector
    }

    function inputEvent(e) {
        if(memory.includes(e.id)) {
             return gameOver()
        }
        setMemory([...memory, e.id])
        setScore({...score, score: score.score + 1})
        console.log(memory, score)
    }

   



    if(!data) return;
   
    return (
        <div className="game">
            <div className="game-over">
            </div>            

            <Score
            score={score.score}
            highScore={score.highScore}
            ></Score>
           {array.map((gif, index) => {
                return(
                    <input key={index} className="gif" id={gif.id} type="image" src={gif.images.original.url} onClick={(e) => inputEvent(e.target)} />
                )
            })}
        </div>
    )
};



export default Game;