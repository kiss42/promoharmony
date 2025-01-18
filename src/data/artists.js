const artists = [
    {
      id: "yvngxen",
      name: "Yvng Xen",
      type: "musician",
      tagline: "Alternative Indie Goth Visionary.",
      bio: `Yvng Xen is a bold and innovative artist redefining the alternative indie goth genre.
            Drawing heavy inspiration from icons like Playboi Carti, Trippie Redd, and Bones, his
            sound blends hypnotic beats, ethereal melodies, and introspective lyrics. His music is a
            reflection of an ever-evolving identity—unapologetic, raw, and deeply expressive. \n\n
            Known for his dark yet energetic stage presence, Yvng Xen brings a unique aesthetic to
            everything he does. Whether it’s haunting synths layered with hard-hitting 808s or his
            striking visuals, his artistry speaks to those who walk the line between rebellion and reinvention. \n\n
            Beyond the music, Yvng Xen uses his platform to connect with fans who feel unseen, offering
            a space where individuality thrives and norms are challenged.`,
      image: require("../assets/yvng-xen.jpeg"), // Ensure this path is correct
      links: [
        { platform: "SoundCloud", url: "https://soundcloud.com/user-873542874" }
      ],
      design: {
        backgroundColor: "bg-black",
        textColor: "text-white",
        layout: "photo-left",
        accentColor: "text-red-500",
      },
      music: {
        src: [require("../assets/dyingalone.mp3")], 
        autoplay: true,
        loop: true,
        volume: 0.5,
      },
    },
    {
        id: "bash",
        name: "Bash",
        type: "musician",
        tagline: "Innovative Beat Maker and Producer.",
        bio: `Bash is a visionary beat maker and producer with a talent for crafting genre-blending soundscapes. 
              Known for his innovative approach to production, Bash creates beats that push boundaries while staying 
              true to his unique artistic identity. His music serves as the foundation for both emerging and established 
              artists, delivering an eclectic mix of hypnotic rhythms, lush melodies, and cutting-edge production techniques. \n\n
      
              As a producer, Bash has built a reputation for collaborating with diverse talents, producing tracks that 
              resonate across genres such as hip-hop, R&B, and electronic music. Whether it's an atmospheric instrumental 
              or a club-ready anthem, Bash's beats captivate listeners and leave an unforgettable impression. \n\n
      
              Explore Bash’s journey and immerse yourself in his world of creative excellence through his work on Spotify.`,
        image: "https://i.scdn.co/image/ab6761670000ecd4f9ff5ae1d882bbba85401a50",
        links: [
          { platform: "Spotify", url: "https://open.spotify.com/artist/3He9kI0emC7DqcM6zWQMK4" },
        ],
        design: {
          backgroundColor: "bg-gradient-to-r from-green-400 to-green-700",
          textColor: "text-white",
          layout: "photo-top",
          accentColor: "text-green-200",
        },
        music: {
            src: [require("../assets/BrysonRevenge.mp3")], 
            autoplay: true,
            loop: true,
            volume: 0.5,
          },
    },
    {
        id: "funnyasschri2",
        name: "FunnyAssChris",
        type: "content creator",
        tagline: "Gay Black Comedian Serving Laughs Nonstop.",
        bio: `Chris is a hilarious and unapologetic Black gay comedian who uses his unique perspective to create 
          laugh-out-loud content that resonates with his audience. His Instagram is a hub of joy, where he pokes 
          fun at life's absurdities and brings levity to everyday struggles. \n\n
          Known for his quick wit and over-the-top skits, Chris's humor is a reflection of his vibrant personality. 
          Whether he’s riffing on pop culture, relationships, or just the chaos of day-to-day life, Chris delivers 
          pure comedic gold. \n\n
          Follow Chris to escape the stress of life and dive into a world where laughter is the only priority..`,
        image: "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7352084554884055082~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=85957&refresh_token=776fd0fdcb78357a87b6c12868eba158&x-expires=1737410400&x-signature=voi27fS2cF0e%2B9QDzbgUG%2FCF358%3D&shp=a5d48078&shcp=81f88b70", // Replace with the correct image if available
        links: [
          { platform: "TikTok", url: "https://www.tiktok.com/@funnyasschri2" },
          { platform: "Instagram", url:"https://www.instagram.com/funnyasschri2/?hl=en"},
        ],
        design: {
          backgroundColor: "bg-gradient-to-r from-blue-500 to-purple-500",
          textColor: "text-white",
          layout: "photo-left",
          accentColor: "text-yellow-400",
        },
    }
  ];
  
  export default artists;
  