/* eslint-disable import/prefer-default-export */
function dates(year, mounth, day) {
  const anotherDates = new Date(year, mounth, day).toLocaleDateString();
  return anotherDates;
}
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
