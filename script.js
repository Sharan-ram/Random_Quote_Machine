var quote = [];
quote[0] = "It is not the world that distresses you but how you relate to it.";
quote[1] = "The soul of religion has been slain and people are hugging on to its carcass.";
quote[2] = "The law of life is that the mind should be at rest while the body engages in action.";
quote[3] = "You home should be at the centre,not the boundary of your affection.";
quote[4] = "The role of vedanta is to free you from infatuation to celebrities and educate you on the eternities.";
quote[5] = "Modern civilized ones without self development are but intelligent savages living in spiritual slums.";
quote[6] = "Inclusive love,not exclusive attachment is the unfoldment of heaven.";
quote[7] = "You get what you deserve,not what you desire.";
quote[8] = "Do not lose the treasure of your Self for the pleasure of the senses.";
quote[9] = "Transform your unilateral passion into universal adoration.";
quote[10] = "A person thinking rationally today is a needle in a haystack.";
quote[11] = "You are more concerned about your act of kindness than thought of kindness.";
quote[12] = "Give your personality a lift,you lift the whole world.";
quote[13] = "All the world's a stage,and all the men and the women merely players.They have their exits and their entrances.  - \"WILLIAM SHAKESSPEARE\"";
quote[14] = "A stone that is fit for the wall is not left in the way.  - \"RICHARD C TRENCH\"";
quote[15] = "The most sensible man is my tailor for he is the only one who takes fresh measurements every time i go to him.  - \"ERNARD SHAW\"";
quote[16] = "Faith is the bird that feels the light and sings while the dawn is still dark.  - \"RABINDRANATH TAGORE\"";
quote[17] = "So many gods,so many creeds,so many paths that wind and wind,while just the art of being kind is all the sad world needs.  - \"ELLA W. WILCOX\"";
quote[18] = "The way to gain anything is to lose it.  - \"SWAMI RAMA TIRTHA\"";
quote[19] = "It is difficult to find happiness within oneself but it is impossible to find it anywhere else.  - \"ARTHUR SCHOPENHAUER\"";
quote[20] = "Iron and Gold are good for buying iron and gold,that is all.  - \"SWAMI RAMA TIRTHA\"";
quote[21] = "Fools rush in where angels fear to tread.  - \"ALEXANDER POPE\"";
quote[22] = "In the whole world,there is no study so beneficial and so elevating as that of Vedanta.  \"ARTHUR SCHOPENHAUER\"";
quote[23] = "Every man is a divinity in disguise,a gold playing the fool.  - \"RALPH W EMERSON\"";
quote[24] = "The trouble with most folks is not so much their ignorance,as their knowing so many things which ain't so.  - \"JOSH BILLINGS\"";


	function tweet(message) {
  window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text='   + encodeURIComponent(message));
}

var msg;
function tweetHandler() {
  tweet($(msg).text()); 
  //tweet(msg);
}

$(document).ready(function() {
  $("#rightButton").on("click", function(){
    var randomquote = Math.floor(Math.random()*(quote.length-1));
    msg = quote[randomquote];
    $(".mainDiv").html(msg);
  });

  $('#tweetButton').on('click', tweet)

});


