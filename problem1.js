
function myFunction(paragraph) {
y=paragraph.length;
blank_char=" ";
var blankchar_location=[];

for (var i=0; i<paragraph.length; i++){
    if (paragraph[i]==blank_char){
        blankchar_location.push(i);
    }


}

mary=[];
//a way to fix the bug
if (blankchar_location.length == 0)
{
    mary.push(paragraph)
}
else
{
mary.push(paragraph.slice(0,blankchar_location[0]));
    for (var i=0; i < blankchar_location.length-1; i++){
    mary.push(paragraph.slice(blankchar_location[i]+1,blankchar_location[i+1]));
    }
mary.push(paragraph.slice(blankchar_location[blankchar_location.length-1]+1,paragraph.length));
}
mary.reverse();
return mary
}

var x=myFunction('The quick brown fox jumped over the lazy dog');
for (var i=0; i < x.length; i++)
{
    process.stdout.write(x[i] + ' '); //no new line
}
console.log('')
