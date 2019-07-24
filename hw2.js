function creat()
{
    let letters = 'ABCDEFGHJKLMNOPQRSTUVWXYZIO';

    let c1 = letters.charAt(Math.floor(Math.random()*letters.length));
    let n12 = letters.indexOf(c1)+10;
    let n1 = parseInt(n12 / 10); 
    let n2 = n12 % 10; 

    let n3 = parseInt(Math.random()*2+1);
    let n4 = parseInt(Math.random()*10);
    let n5 = parseInt(Math.random()*10);
    let n6 = parseInt(Math.random()*10);
    let n7 = parseInt(Math.random()*10);
    let n8 = parseInt(Math.random()*10);
    let n9 = parseInt(Math.random()*10);
    let n10 = parseInt(Math.random()*10);

    let sum = n1*1 + n2*9 + n3*8 + n4*7 + n5*6+ n6*5 + n7*4 + n8*3 + n9*2+ n10*1;
    
    for (let i = 0 ; i <= 9 ; i++)
    {
        if( (sum+i)%10 == 0)
        {
            let r = c1 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + i;
            document.getElementById('result').innerHTML = r;
            break;
        }
    }
}
function creat2(gender) //指定男女
{
    let letters = 'ABCDEFGHJKLMNOPQRSTUVWXYZIO';

    let c1 = letters.charAt(Math.floor(Math.random()*letters.length));
    let n12 = letters.indexOf(c1)+10;
    let n1 = parseInt(n12 / 10); 
    let n2 = n12 % 10; 

    // let n3 = parseInt(Math.random()*2+1);

    let n4 = parseInt(Math.random()*10);
    let n5 = parseInt(Math.random()*10);
    let n6 = parseInt(Math.random()*10);
    let n7 = parseInt(Math.random()*10);
    let n8 = parseInt(Math.random()*10);
    let n9 = parseInt(Math.random()*10);
    let n10 = parseInt(Math.random()*10);

    let sum = n1*1 + n2*9 + gender*8 + n4*7 + n5*6+ n6*5 + n7*4 + n8*3 + n9*2+ n10*1;

    for (let i = 0 ; i <= 9 ; i++)
    {
        if( (sum+i)%10 == 0)
        {
            let r = c1 + gender + n4 + n5 + n6 + n7 + n8 + n9 + n10 + i;
            document.getElementById('result2').innerHTML = r ;
            break;
        }
    } 
}
function creat3(area) //指定區域
{
    let letters = 'ABCDEFGHJKLMNOPQRSTUVWXYZIO';

    // let c1 = letters.charAt(Math.floor(Math.random()*letters.length));
    let c1 = area;
    let n12 = letters.indexOf(c1)+10;
    let n1 = parseInt(n12 / 10); 
    let n2 = n12 % 10; 

    let n3 = parseInt(Math.random()*2+1);
    let n4 = parseInt(Math.random()*10);
    let n5 = parseInt(Math.random()*10);
    let n6 = parseInt(Math.random()*10);
    let n7 = parseInt(Math.random()*10);
    let n8 = parseInt(Math.random()*10);
    let n9 = parseInt(Math.random()*10);
    let n10 = parseInt(Math.random()*10);

    let sum = n1*1 + n2*9 + n3*8 + n4*7 + n5*6+ n6*5 + n7*4 + n8*3 + n9*2+ n10*1;

    for (let i = 0 ; i <= 9 ; i++)
    {
        if( (sum+i)%10 == 0)
        {
            let r = c1 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + i;
            document.getElementById('result3').innerHTML = r;
            break;
        }
    } 
}
function creat4(gender2,area2) //指定男女.區域
{
    let letters = 'ABCDEFGHJKLMNOPQRSTUVWXYZIO';

    let c1 = area2;
    // let c1 = letters.charAt(Math.floor(Math.random()*letters.length));
    let n12 = letters.indexOf(c1)+10;
    let n1 = parseInt(n12 / 10); 
    let n2 = n12 % 10; 

    // let n3 = parseInt(Math.random()*2+1);
    let n4 = parseInt(Math.random()*10);
    let n5 = parseInt(Math.random()*10);
    let n6 = parseInt(Math.random()*10);
    let n7 = parseInt(Math.random()*10);
    let n8 = parseInt(Math.random()*10);
    let n9 = parseInt(Math.random()*10);
    let n10 = parseInt(Math.random()*10);

    let sum = n1*1 + n2*9 + gender2*8 + n4*7 + n5*6+ n6*5 + n7*4 + n8*3 + n9*2+ n10*1;

    for (let i = 0 ; i <= 9 ; i++)
    {
        if( (sum+i)%10 == 0)
        {
            let r = c1 + gender2 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + i;
            document.getElementById('result4').innerHTML = r;
            break;
        }
    } 
}