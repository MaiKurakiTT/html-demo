const fs = require('fs');
const path = require('path');

(async function () {
let { data } = require('./data.js');
const { Scene, Label, Sprite } = require('spritejs');
let scene = new Scene('#test', {
	resolution: [614, 426]
});
await scene.preload({
	id: 'bgImage',
	src: path.resolve('./bg.png'),
});
// let bgImage = await loadImage('bg.png');
let bglayer = scene.layer('bg', { handleEvent: false });
let gbImg = new Sprite('bgImage');
gbImg.attr({
	size: [368, 258]
});
let reason = new Label({
	anchor: 0.5,
	pos: [156, 109],
	text: '',
	font: '46px Arial',
	color: 'blue',
	textAlign: 'left'
});
let school = new Label({
	anchor: 0.5,
	text: '',
	color: '#f90',
	pos: [123, 299],
	font: '22px "宋体"',
	textAlign: 'left'
});
let books = new Label({
	anchor: 0.5,
	text: '',
	fillColor: '#fff',
	pos: [122, 338],
	lineHeight: 30,
	font: '22px "宋体"',
	textAlign: 'left'
});
let nickName = new Label({
	anchor: 0.5,
	text: '',
	fillColor: '#fff',
	pos: [405, 298],
	font: '22px "宋体"',
	textAlign: 'left'
});
let sex = new Label({
	anchor: 0.5,
	text: '',
	fillColor: '#fff',
	pos: [424, 334],
	font: '22px "宋体"',
	textAlign: 'left'
});
console.log('data', data);
bglayer.append(gbImg);
bglayer.append(reason);
bglayer.append(school);
bglayer.append(books);
bglayer.append(nickName);
bglayer.append(sex);
data.forEach(d => {
	reason.text = d.reason;
	school.text = d.school;
	books.text = d.books.map(d => `《${d}》`).join('\n');
	nickName.text = d.nickName;
	sex.text = d.sex;
});
const canvas = await scene.snapshot();
fs.writeFileSync('zxy.jpg', canvas.toBuffer());
})();
