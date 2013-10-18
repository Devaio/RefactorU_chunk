$(function(){

$(document).on('submit', '.userInputForm', function(e) {
	e.preventDefault();
	$peopleCont = $('.peopleCont')
	var numPeople = Number($('.peopleInput').val());
	var numGroup = Number($('.groupInput').val());
	
	if(!numPeople || !numGroup){
		$('.userInputCont').append('<p class="formReminder">Please fill out both forms!');
		$('.formReminder').fadeOut('slow', function(){
			$(this).remove();
		})
	}
	else{
		$('.peopleInput').val('');
		$('.groupInput').val('');
		$peopleCont.html('')
		var peopleArray = []
		var peopleCount = 0;
		var groupChunk = Chunk.chunk(peopleArray, numGroup)
		console.log('chunk', groupChunk) //working
		var groupCount = 0

		for(var i=0; i<numGroup; i++){
			$peopleCont.append('<div class="group" data-group='+groupCount+'></div>')
			groupCount ++
			console.log('works')
		}


		for(var i=0, len=Math.floor(numPeople/numGroup); i<len; i++){
			$('.group').attr('data-group', i).append('<div class="person" data-person='+peopleCount+'>Person!</div>')
			peopleArray.push($('.person').attr('data-person', peopleCount))
			console.log(peopleArray)
			peopleCount ++
		};

	

	}




});














});
