/* Takes an array and splits it into equal sized number of chunks*/

//Original Chunk
//@param arr     array
//@param chunks  number
var Chunk = (function(){

	var chunk = function chunk(arr, chunks){
		var chunkedArrays = [];
		var len = arr.length;

		//gets the length each chunk needs to be by rounding down
		var chunker = Math.floor(len/chunks);

		//the remainder tells how many chunks need an extra index
		var extra = len%chunks;

		var begin=0
		
		for(var i=0; i<chunks; i++){
		
		//while there needs to be extra indeces in chunks
		if(extra > 0){
			var end = (begin+chunker+1)
			chunkedArrays.push(arr.slice(begin, end))
				begin = end
				extra--
			}

		//when the number of extra indexed chunks is through
		else{
			var end = (begin+chunker)
			chunkedArrays.push(arr.slice(begin, end))
			begin = end
		}

		}
		return chunkedArrays
	};

	return {
		chunk: chunk
	}

})();


//DOM Chunk
var DomChunk = (function(){

	var domChunk = function chunk(people, groups){
		var chunkedArrays = [];

		var peopleArr = []
		var peopleCounter = 0
		for (var i=0; i<people; i++){
			peopleArr.push(peopleCounter)
			peopleCounter++
		}

		var len = peopleArr.length;

		//gets the length each chunk needs to be by rounding down
		var chunker = Math.floor(len/groups);

		//the remainder tells how many chunks need an extra index
		var extra = len%groups;

		var begin=0
		
		for(var i=0; i<groups; i++){
		
		//while there needs to be extra indeces in chunks
		if(extra > 0){
			var end = (begin+chunker+1)
			chunkedArrays.push(peopleArr.slice(begin, end))
				begin = end
				extra--
			}

		//when the number of extra indexed chunks is through
		else{
			var end = (begin+chunker)
			chunkedArrays.push(peopleArr.slice(begin, end))
			begin = end
		}

		}
		return chunkedArrays
	};

	return {
		domChunk: domChunk
	}

})();