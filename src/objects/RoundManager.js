import RoundAction from './RoundAction.js'

const stats = {
    NONE: 'none',
    EVENT: 'event',
    INDIVIDUAL: 'individual',
    MOVE: 'move'
}

export default class RoundManager {
    constructor(players) {
        this.players = players
        this.round = 0;
        this.stats = stats.NONE
        this.individualRoundPlayer = null;
        this.player
        this.roundActions = null;
    }

    nextRound() {
        this.round++;
        this.individualStats = stats.EVENT

        //todo gerer le systeme d'evenement puis, executer en calback 'startIndividualStats'
        this.startIndividualStats()
    }

    startIndividualStats() {
        this.individualStats = stats.INDIVIDUAL
        this.roundActions = [];
        this.players.forEach(player => {
            this.roundActions.push(new RoundAction(player));
        });

        this.nextPlayer()
    }

    nextPlayer() {
        if ( (this.individualRoundPlayer = this.roundActions.shift()) !== undefined ) {
            this.individualRoundPlayer.startAction(this.nextPlayer);
        } else{
            this.startMoveStats();
        }
    }

    startMoveStats() {
        //todo gerer le systeme de mouvement puis, executer en calback 'nextRound'
        nextRound()
    }
}