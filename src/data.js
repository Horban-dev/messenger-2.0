/* eslint-disable import/prefer-default-export */
function dates(year, mounth, day) {
  const anotherDates = new Date(year, mounth, day).toLocaleDateString();
  return anotherDates;
}

export const MY_ID = 4308;
export const chatsData = [
  {
    id: 1,
    pics: 'https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_.jpg',
    nick: 'Josephina',
    text: 'ok, thanks',
    date: dates(2022, 10, 22),
  },
  {
    id: 2,
    pics: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmx7HN0tq31rBrVNJlUqG8uTkU8HMbd-00NQ&usqp=CAU',
    nick: 'Anton',
    text: 'hi, bro',
    date: dates(2022, 10, 17),
  },
  {
    id: 3,
    pics: 'https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/277d214b9adff0c3cbfaa579679c0106.jpeg',
    nick: 'Oleg',
    text: 'hey, man..',
    date: dates(2022, 10, 14),
  },

];
export const dialogsData = {
  1: {
    id: 1,
    headerLogo: 'https://image.cnbcfm.com/api/v1/image/105755683-1550853148548gettyimages-109478107.jpeg?v=1581098226&w=929&h=523&vtcrop=y',
    chatAvatar: 'https://image.cnbcfm.com/api/v1/image/105755683-1550853148548gettyimages-109478107.jpeg?v=1581098226&w=929&h=523&vtcrop=y',
    headerName: 'Josephina',
    messages: [
      { text: 'Hello, Illia', authorId: 1, date: dates(2022, 10, 14) },
      { text: 'Hi, Jose', authorId: 4308, date: dates(2022, 11, 14) },
      { text: 'Hru?', authorId: 4308, date: dates(2022, 11, 14) },
      { text: 'im fine, thanks, and you?)', authorId: 1, date: dates(2022, 11, 18) },
    ],
  },

  2: {
    id: 2,
    headerLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmx7HN0tq31rBrVNJlUqG8uTkU8HMbd-00NQ&usqp=CAU',
    chatAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmx7HN0tq31rBrVNJlUqG8uTkU8HMbd-00NQ&usqp=CAU',
    headerName: 'Anton',
    messages: [
      { text: 'his', authorId: 1, date: dates(2022, 10, 14) },
      { text: 'my', authorId: 4308, date: dates(2022, 10, 14) },
      { text: 'his', authorId: 1, date: dates(2022, 10, 14) },
      { text: 'my', authorId: 4308, date: dates(2022, 10, 14) },
    ],
  },
  3: {
    id: 3,
    headerLogo: 'https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/277d214b9adff0c3cbfaa579679c0106.jpeg',
    chatAvatar: 'https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/277d214b9adff0c3cbfaa579679c0106.jpeg',
    headerName: 'Oleg',
    messages: [
      { text: 'his', authorId: 1, date: dates(2022, 10, 14) },
      { text: 'me', authorId: 4308, date: dates(2022, 10, 14) },
    ],
  },
};
