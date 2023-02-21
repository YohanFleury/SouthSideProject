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

type initialStateProps = {
  usersArray: any;
  currentUser: any[] | null;
  imagesPost: any[]
}

export const initialState: initialStateProps = {
    usersArray: users,
    currentUser: null,
    imagesPost: []
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
        
    }
})


export const { filterUsers, resetUsers, setCurrentUser, addImagesPost, deleteImageUri, resetImagesUris} = userTestSLice.actions

export default userTestSLice.reducer