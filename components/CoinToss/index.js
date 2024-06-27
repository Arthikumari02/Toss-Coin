import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    coinsStatus: 0,
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickOfTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => {
      const isHeads = tossResult === 0
      return {
        coinsStatus: tossResult,
        total: prevState.total + 1,
        heads: isHeads ? prevState.heads + 1 : prevState.heads,
        tails: isHeads ? prevState.tails : prevState.tails + 1,
      }
    })
  }

  render() {
    const {coinsStatus, total, heads, tails} = this.state
    const imageUrl =
      coinsStatus === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="coin-toss-container">
        <div className="coin-toss-content">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="toss-result-image" />
          <button
            className="button-toss"
            type="button"
            onClick={this.onClickOfTossCoin}
          >
            Toss Coin
          </button>
          <div className="results">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
