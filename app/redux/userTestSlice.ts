import { createSlice } from '@reduxjs/toolkit'

const users = [
    {
      id: 1,
      name: 'Alice Smith',
      username: 'alice123',
      description: 'Je suis développeuse web freelance. J\'aime résoudre les problèmes et trouver des solutions élégantes.',
      profilPicture: 'https://randomuser.me/api/portraits/women/1.jpg',
      coverPicture: 'https://images.unsplash.com/photo-1541855498-1e621e7c03b4',
      isCertified: true,
    },
    {
      id: 2,
      name: 'Bob Johnson',
      username: 'bob456',
      description: 'Je suis un avocat spécialisé dans le droit des affaires. J\'ai travaillé pour de grandes entreprises et je suis disponible pour des consultations privées.',
      profilPicture: 'https://randomuser.me/api/portraits/men/2.jpg',
      coverPicture: 'https://images.unsplash.com/photo-1502908597-81e469b2c64a',
      isCertified: false,
    },
    {
      id: 3,
      name: 'Charlie Brown',
      username: 'charlie789',
      description: 'Je suis un professeur de mathématiques passionné. J\'aime transmettre mes connaissances et aider les élèves à réussir.',
      profilPicture: 'https://randomuser.me/api/portraits/men/3.jpg',
      coverPicture: 'https://images.unsplash.com/photo-1584309610561-b35d3893bb3a',
      isCertified: true,
    },
    {
      id: 4,
      name: 'David Lee',
      username: 'davidlee',
      description: 'Je suis designer graphique. J\'aime créer des designs accrocheurs pour les marques et les entreprises.',
      profilPicture: 'https://randomuser.me/api/portraits/men/4.jpg',
      coverPicture: 'https://images.unsplash.com/photo-1576593419644-bc4d4fcb1b8a',
      isCertified: false,
    },
    {
      id: 5,
      name: 'Emma Taylor',
      username: 'emma456',
      description: 'Je suis une traductrice indépendante. J\'ai travaillé sur des projets dans de nombreuses langues différentes.',
      profilPicture: 'https://randomuser.me/api/portraits/women/5.jpg',
      coverPicture: 'https://images.unsplash.com/photo-1617359304681-77f9cfbe1d8f',
      isCertified: true,
    },
    {
      id: 6,
      name: 'Frank Anderson',
      username: 'frank789',
      description: 'Je suis un consultant en gestion d\'entreprise. J\'aime aider les entreprises à optimiser leur croissance et leur rentabilité.',
      profilPicture: 'https://randomuser.me/api/portraits/men/6.jpg',
      coverPicture: 'https://images.unsplash.com/photo-1597926269756-b139ee442d1e',
      isCertified: true,
    },
    {
      id: 7,
      name: 'Grace Lee',
      username: 'grace123',
      description: 'Je suis une nutritionniste certifiée. J\'aime aider les gens à améliorer leur santé et leur bien-être.',
      profilPicture: 'https://randomuser.me/api/portraits/women/8.jpg',
      coverPicture: 'https://images.unsplash.com/photo-1541797365-c5e8fc3e3fc2',
      isCertified: false,
    },
    {
        id: 8,
        name: "John Smith",
        username: "johnsmith",
        description: "Software Engineer with over 10 years of experience in web development.",
        profilPicture: "https://randomuser.me/api/portraits/men/8.jpg",
        coverPicture: "https://picsum.photos/seed/1/1200/500",
        isCertified: true,
      },
      {
        id: 9,
        name: "Emily Davis",
        username: "emilydavis",
        description: "Marketing Manager with a passion for creating engaging campaigns that drive results.",
        profilPicture: "https://randomuser.me/api/portraits/women/9.jpg",
        coverPicture: "https://picsum.photos/seed/2/1200/500",
        isCertified: false,
      },
      {
        id: 10,
        name: "David Lee",
        username: "davidlee",
        description: "Product Designer with a focus on creating intuitive and visually appealing interfaces.",
        profilPicture: "https://randomuser.me/api/portraits/men/10.jpg",
        coverPicture: "https://picsum.photos/seed/3/1200/500",
        isCertified: true,
      },
      {
        id: 20,
        name: "Sarah Johnson",
        username: "sarahjohnson",
        description: "Journalist with a passion for uncovering the truth and sharing compelling stories.",
        profilPicture: "https://randomuser.me/api/portraits/women/20.jpg",
        coverPicture: "https://picsum.photos/seed/4/1200/500",
        isCertified: false,
      },
      {
        id: 11,
        name: "Robert Chen",
        username: "robertchen",
        description: "Investment Banker with a track record of success in raising capital for high-growth companies.",
        profilPicture: "https://randomuser.me/api/portraits/men/11.jpg",
        coverPicture: "https://picsum.photos/seed/5/1200/500",
        isCertified: true,
      },
      {
        id: 12,
        name: "Olivia Martinez",
        username: "oliviamartinez",
        description: "Graphic Designer with a talent for creating eye-catching designs that make an impact.",
        profilPicture: "https://randomuser.me/api/portraits/women/12.jpg",
        coverPicture: "https://picsum.photos/seed/6/1200/500",
        isCertified: true,
      },
      {
        id: 13,
        name: "William Brown",
        username: "williambrown",
        description: "Data Analyst with expertise in analyzing complex datasets and providing insights for decision-making.",
        profilPicture: "https://randomuser.me/api/portraits/men/13.jpg",
        coverPicture: "https://picsum.photos/seed/7/1200/500",
        isCertified: false,
      },
      {
        id: 14,
        name: "Sophia Taylor",
        username: "sophiataylor",
        description: "UX Designer with a passion for creating seamless and intuitive user experiences.",
        profilPicture: "https://randomuser.me/api/portraits/women/14.jpg",
        coverPicture: "https://picsum.photos/seed/8/1200/500",
        isCertified: true,
      },
      {
        id: 15,
        name: "Alice Smith",
        username: "alicesmith",
        description: "Photographer specializing in nature and landscape photography.",
        profilPicture: "https://randomuser.me/api/portraits/women/15.jpg",
        coverPicture: "https://picsum.photos/seed/11/1200/500",
        isCertified: true,
      },
      {
        id: 16,
        name: "Bob Johnson",
        username: "bobjohnson",
        description: "Fitness Trainer with expertise in strength and conditioning training.",
        profilPicture: "https://randomuser.me/api/portraits/men/16.jpg",
        coverPicture: "https://picsum.photos/seed/12/1200/500",
        isCertified: false,
      },
      {
        id: 17,
        name: "Carla Davis",
        username: "carladavis",
        description: "Graphic Designer with a focus on creating branding and visual identity.",
        profilPicture: "https://randomuser.me/api/portraits/women/17.jpg",
        coverPicture: "https://picsum.photos/seed/13/1200/500",
        isCertified: true,
      },
      {
        id: 18,
        name: "David Lee",
        username: "davidlee",
        description: "Chef with a passion for creating innovative and delicious cuisine.",
        profilPicture: "https://randomuser.me/api/portraits/men/18.jpg",
        coverPicture: "https://picsum.photos/seed/14/1200/500",
        isCertified: true,
      },
      {
        id: 19,
        name: "Ella Rodriguez",
        username: "ellarodriguez",
        description: "Travel Blogger with a love for exploring new destinations and sharing travel tips.",
        profilPicture: "https://randomuser.me/api/portraits/women/19.jpg",
        coverPicture: "https://picsum.photos/seed/15/1200/500",
        isCertified: false,
      },
]

const postsList: any[] = [
  {
    authorId: 346,
    name: "Max Miller",
    username: "maxmiller12",
    description: "Just finished a great workout at the gym. Did some weightlifting and cardio. Feeling energized and ready to tackle the day! I always make sure to work out in the morning to start my day off right. It helps me stay focused and productive throughout the day.",
    category: "sport",
    images: ["https://source.unsplash.com/random/10"],
    likes: 68,
  },
  {
    authorId: 500,
    name: "Sara Johnson",
    username: "sjohnson34",
    description: "Went to an open house for a new apartment today. The layout was perfect and the location was great. Can't wait to move in! It's been a long search, but I'm glad I found the perfect place. The apartment has a great view and plenty of natural light.",
    category: "immobilier",
    images: ["https://source.unsplash.com/random/20", "https://source.unsplash.com/random/30"],
    likes: 42,
  },
  {
    authorId: 800,
    name: "Nick Patel",
    username: "nickp77",
    description: "Bought some bitcoin today and it's already gone up in value. Excited to see where this goes! I've been following the cryptocurrency market for a while and decided to finally invest. I'm optimistic about the future of blockchain technology.",
    category: "crypto",
    images: ["https://source.unsplash.com/random/40"],
    likes: 19,
  },
  {
    authorId: 100,
    name: "Emma Thompson",
    username: "emmat",
    description: "Played some Fortnite today and got a Victory Royale! It's always satisfying to get a win. I've been practicing my building skills and it paid off in this game. Can't wait to play again and get more wins!",
    category: "videoGames",
    images: ["https://source.unsplash.com/random/50", "https://source.unsplash.com/random/60"],
    likes: 91,
  },
  {
    authorId: 223,
    name: "Alex Rodriguez",
    username: "arod13",
    description: "Started a new business venture today and feeling optimistic about the future. It's exciting to see where this will go! I've been working on this project for months and it's finally coming to fruition. I'm confident in my business plan and can't wait to see it succeed.",
    category: "business",
    images: ["https://source.unsplash.com/random/70"],
    likes: 33,
  },
  {
    authorId: 732,
    name: "Lena Smith",
    username: "lenas",
    description: "Listened to some great new music today and discovered some new artists. Always exciting to find new music to enjoy! I love exploring new genres and artists, and today I found some great new tunes. Can't wait to add them to my playlist.",
    category: "musique",
    images: ["https://source.unsplash.com/random/80"],
    likes: 52,
  },
  {
    authorId: 123,
    name: "Laura Kim",
    username: "laurak",
    description: "Started training for a half marathon today. It was tough but I'm determined to reach my goal. Can't wait to see my progress! Running has always been a passion of mine and I'm excited to take on this challenge. I'm following a strict training plan and can't wait to see the results.",
    category: "sport",
    images: ["https://source.unsplash.com/random/11"],
    likes: 27,
  },
  {
    authorId: 456,
    name: "David Patel",
    username: "dpatel7",
    description: "Invested in some real estate today. It's a great way to build long-term wealth and provide passive income. Excited to see where this goes! I've been doing research on the real estate market for a while and finally found a great opportunity. I'm confident in my investment and can't wait to see the returns.",
    category: "immobilier",
    images: ["https://source.unsplash.com/random/21"],
    likes: 42,
  },
  {
    authorId: 789,
    name: "Sophie Park",
    username: "sophiep",
    description: "Started mining ethereum today. It's a great way to earn some extra income and learn about the world of cryptocurrency. Can't wait to see where this goes! I've been interested in cryptocurrency for a while and finally decided to start mining. It's a fascinating world and I'm excited to learn more.",
    category: "crypto",
    images: ["https://source.unsplash.com/random/31"],
    likes: 19,
  },
  {
    authorId: 246,
    name: "John Kim",
    username: "jkim22",
    description: "Played some Call of Duty today and got a high score. It's always satisfying to beat your personal best. Can't wait to see how far I can go! I've been practicing my gaming skills for a while and it's paying off. I'm always looking for ways to improve and reach new levels of achievement.",
    category: "videoGames",
    images: ["https://source.unsplash.com/random/41"],
    likes: 68,
  },
  {
    authorId: 579,
    name: "Emily Chen",
    username: "emilyc",
    description: "Launched my own startup today. It's a new way to connect local farmers with consumers. I'm excited to see how it grows! It's been a long process to get to this point, but I'm proud of what I've accomplished. I'm passionate about supporting local farmers and this is a great way to make a difference.",
    category: "business",
    images: ["https://source.unsplash.com/random/51"],
    likes: 91,
  },
  {
    authorId: 802,
    name: "Justin Lee",
    username: "justinl8",
    description: "Listened to some great new jazz music today and discovered some new artists. It's always great to expand your musical horizons! Jazz is a genre that I've been getting more into recently and I'm loving the variety and creativity of the music. I'm always on the lookout for new artists to listen to.",
    category: "musique",
    images: ["https://source.unsplash.com/random/61"],
    likes: 33,
  },
  {
    authorId: 123,
    name: "Julia Martinez",
    username: "juliam",
    description: "Went for a long hike today and enjoyed some beautiful scenery. Hiking is one of my favorite outdoor activities and I love exploring new trails. Today's hike was a bit challenging, but the views made it worth it. Can't wait to go again!",
    category: "sport",
    images: ["https://source.unsplash.com/random/11"],
    likes: 31,
  },
  {
    authorId: 456,
    name: "Daniel Kim",
    username: "dkim",
    description: "Started learning French today. It's always been a language that I've wanted to learn and I'm finally taking the plunge. It's a beautiful language and I'm excited to explore the culture and history of France. Can't wait to see how much I can learn!",
    category: "culture",
    images: ["https://source.unsplash.com/random/21"],
    likes: 52,
  },
  {
    authorId: 789,
    name: "Jasmine Lee",
    username: "jlee",
    description: "Started a new job today. It's a bit nerve-wracking to be starting something new, but I'm excited for the challenge. I'm looking forward to meeting new people and learning new skills. Can't wait to see what this job has in store!",
    category: "business",
    images: ["https://source.unsplash.com/random/31"],
    likes: 19,
  },
  {
    authorId: 246,
    name: "Maxime Dubois",
    username: "mdubois",
    description: "Tried a new recipe today and it turned out amazing! Cooking is one of my favorite hobbies and I love trying new things. Today I made a Moroccan-inspired dish with lots of spices and fresh ingredients. Can't wait to make it again!",
    category: "food",
    images: ["https://source.unsplash.com/random/41"],
    likes: 47,
  },
  {
    authorId: 579,
    name: "Sophie Chen",
    username: "sophiec",
    description: "Bought a new bike today and went for a ride in the park. Cycling is a great way to stay active and explore your surroundings. I love the feeling of the wind in my hair and the sense of freedom that comes with cycling. Can't wait to explore more of the city on my new bike!",
    category: "sport",
    images: ["https://source.unsplash.com/random/51"],
    likes: 68,
  },
  {
    authorId: 802,
    name: "Alexandre Martin",
    username: "amartin",
    description: "Visited a new art exhibit today and was blown away by the creativity and talent of the artists. It's always inspiring to see new art and explore different styles and mediums. I left feeling inspired and energized. Can't wait to go again!",
    category: "culture",
    images: ["https://source.unsplash.com/random/61"],
    likes: 25,
  },
]

type initialStateProps = {
  usersArray: any;
  currentUser: any[] | null;
  imagesPost: any[];
  openNewPostModal: boolean;
  postsList: any[];
  isSub: boolean;
}

export const initialState: initialStateProps = {
    usersArray: users,
    currentUser: null,
    imagesPost: [],
    openNewPostModal: false,
    postsList: postsList,
    isSub: false
}

export const userTestSLice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
      filterUsers: (state, { payload }) => {
        const result = users.filter(user => {
          if (user.name.toLowerCase().includes(payload.toLowerCase()) || user.username.toLowerCase().includes(payload.toLowerCase())) {
            return true;
          }
          return false;
        });
        state.usersArray = result;
      },

      resetUsers: (state) => {
          state.usersArray = users
      },
      
      setCurrentUser: (state, {payload}) => {
        state.currentUser = payload
      },

      addImagesPost: (state, {payload}) => {
        state.imagesPost.push(payload)
      },

      deleteImageUri: (state, {payload}) => {
        state.imagesPost.map((image: any, index: number) => {
            if(image.uri === payload) state.imagesPost.splice(index, 1)
        })
      },
      resetImagesUris: (state) => {
        state.imagesPost = []
      },

      setOpenNewPostModal: (state, {payload}) => {
        state.openNewPostModal = payload
      },

      createPost: (state, {payload}) => {
        state.postsList.unshift(payload)
      },

      setIsSub: (state, {payload}) => {
        state.isSub = payload
      }
        
    }
})


export const { 
  filterUsers, 
  resetUsers, 
  setCurrentUser, 
  addImagesPost,
  deleteImageUri, 
  resetImagesUris,
  setOpenNewPostModal,
  createPost,
  setIsSub,
} = userTestSLice.actions

export default userTestSLice.reducer