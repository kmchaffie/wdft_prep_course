/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/

var i;
for(i=1;i<=100;i++){
		console.log(i);
	}
/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var triangle = '#';

for (var i = 0; i < 7; i++) {
    triangle = triangle + '#';
    console.log(triangle);
}