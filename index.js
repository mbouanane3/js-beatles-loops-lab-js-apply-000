// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arr =[];
  for (let i=0; i < musicians.length; i++) {
    const str = musicians[i] + 'plays' + instruments[i];
    arr.push(str);
  }
}