var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = [["2","honeybee.png"], ["3", "honeybee.png"], ["4","herculesbeetle.png"], ["5","herculesbeetle.png"], ["6","herculesbeetle.png"], ["7","honeybee.png"], ["8","herculesbeetle.png"], ["9","honeybee.png"], ["10","honeybee.png"], ["J","panda.jpeg"], ["Q","honeybee.png"], ["K","honeybee.png"], ["A","honeybee.png"]];
var deck = new Array();

function createDeck()
{
    deck = new Array();
    for (var i = 0 ; i < values.length; i++)
    {
        for(var x = 0; x < suits.length; x++)
        {
            var weight = parseInt(values[i][0]);
            if (values[i][0] == "J" || values[i][0] == "Q" || values[i][0] == "K")
                weight = 10;
            if (values[i][0] == "A")
                weight = 11;
            var card = { Value: values[i][0], Images: values[i][1], Suit: suits[x], Weight: weight };
            deck.push(card);
        }
    }
}

function shuffle()
{
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < 1000; i++)
    {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}

var players = new Array();
function createPlayers(num)
{
    players = new Array();
    for(var i = 1; i <= num; i++)
    {
        var hand = new Array();
        var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
        players.push(player);
    }
}

function createPlayersUI()
{
    document.getElementById('players').innerHTML = '';
    for(var i = 0; i < players.length; i++)
    {
        var div_player = document.createElement('div');
        var div_playerid = document.createElement('div');
        var div_hand = document.createElement('div');
        var div_points = document.createElement('div');

        div_points.className = 'points';
        div_points.id = 'points_' + i;
        div_player.id = 'player_' + i;
        div_player.className = 'player';
        div_hand.id = 'hand_' + i;

        div_playerid.innerHTML = players[i].ID;
        div_player.appendChild(div_playerid);
        div_player.appendChild(div_hand);
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player);
    }
}

function startblackjack()
{
    document.getElementById('btnStart').value = 'Restart';
    document.getElementById("status").style.display="none";
    // deal 2 cards to every player object
    currentPlayer = 0;
    createDeck();
    shuffle();
    createPlayers(5);
    createPlayersUI();
    dealHands();
    document.getElementById('player_' + currentPlayer).classList.add('active');
}

function dealHands()
{
    // alternate handing cards to each player
    // 2 cards each
    for(var i = 0; i < 1; i++)
    {
        for (var x = 0; x < players.length; x++)
        {
            var card = deck.pop();
            players[x].Hand.push(card);
            renderCard(card, x);
            updatePoints();
        }
    }

    updateDeck();
}
function renderCard(card, player)
{
    var hand = document.getElementById('hand_' + player);
    hand.appendChild(getCardUI(card));
}

function getCardUI(card)
{
    var bugs = document.createElement('img');
    var el = document.createElement('div');
    
    bugs.src = card.Images;
    el.className = 'card';
    el.innerHTML = card.Suit + ' ';
    el.appendChild(bugs);
    el.innerHTML += card.Value;
    return el;
}

function getPoints(player)
{
    var points = 0;
    for(var i = 0; i < players[player].Hand.length; i++)
    {
        points += players[player].Hand[i].Weight;
    }
    players[player].Points = points;
    return points;
}

function updatePoints()
{
    for (var i = 0 ; i < players.length; i++)
    {
        getPoints(i);
        document.getElementById('points_' + i).innerHTML = players[i].Points;
    }
}


var currentPlayer = 0;
function hitMe()
{
    // pop a card from the deck to the current player
    // check if current player new points are over 21
    var card = deck.pop();
    players[currentPlayer].Hand.push(card);
    renderCard(card, currentPlayer);
    updatePoints();
    updateDeck();
    check();
}

function check()
{
    if (players[currentPlayer].Points > 21)
    {
        document.getElementById('status').innerHTML = 'Player: ' + players[currentPlayer].ID + ' LOST';
        document.getElementById('status').style.display = "inline-block";
        end();
    }
    else if(players[currentPlayer].Points == 21){
        document.getElementById('status').innerHTML = 'Player: ' + players[currentPlayer].ID + ' WON';
        document.getElementById('status').style.display = "inline-block";
        


    }

    // move on to next player, if any
    if (currentPlayer != players.length-1) {
        document.getElementById('player_' + currentPlayer).classList.remove('active');
        currentPlayer += 1;
        document.getElementById('player_' + currentPlayer).classList.add('active');
    }

    else if(currentPlayer == players.length-1){
        document.getElementById('player_' + currentPlayer).classList.remove('active');
        currentPlayer -= players.length-1;
        document.getElementById('player_' + currentPlayer).classList.add('active');
    }
}

function stay()
{
    // move on to next player, if any
    if (currentPlayer != players.length-1) {
        document.getElementById('player_' + currentPlayer).classList.remove('active');
        currentPlayer += 1;
        document.getElementById('player_' + currentPlayer).classList.add('active');
    }

    else if(currentPlayer == players.length-1){
        document.getElementById('player_' + currentPlayer).classList.remove('active');
        currentPlayer -= players.length-1;
        document.getElementById('player_' + currentPlayer).classList.add('active');
    }
}
function updateDeck()
        {
            document.getElementById('deckcount').innerHTML = deck.length;
        }

function end()
{
    var winner = -1;
    var score = 0;

    for(var i = 0; i < players.length; i++)
    {
        if (players[i].Points > score && players[i].Points < 22)
        {
            winner = i;
        }

        score = players[i].Points;
    }

    document.getElementById('status').innerHTML = 'Winner: Player ' + players[winner].ID;
    document.getElementById("status").style.display = "inline-block";
}

