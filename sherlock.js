//Input Example

//_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------

var numeros = _INPUT.split(/\n| /);
num=numeros[0];
var min= new Array((numeros.length-1)/2);
var max= new Array((numeros.length-1)/2);
cont=0;
cont2=0;
var odd = new Boolean (true);
for(k=1; k<numeros.length; k++) {
		if(odd==true){
			min[cont]= parseInt(numeros[k]);
			cont++;
			odd=false;
		}
		else{
			max[cont2]= parseInt(numeros[k]);
			cont2++;
			odd=true;
		}
		
	}
for(r=0; r<num; r++) {
	o=0;
	for ( k=min[r]; k<=max[r]; k++){
		y=0;
		x= Math.sqrt(k);
		y= x % 2;
		if (y==0 || y==1){
			o++;
		}
	}
	console.log(o);
}
