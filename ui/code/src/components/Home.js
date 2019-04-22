import { Component } from 'preact'
import { connect } from 'redux-zero/preact'
import { Link } from 'preact-router/match'
import actions from '../actions'
import style from './style'

@connect(
  state => state,
  actions
)
export default class Home extends Component {
  render({ dismissUI }) {
    return (
      <div>
        <div
          style="display: flex; align-items: center; flex-direction: row;"
          class={style.navHeader}
        >
          <div id={style.menuToggle}>
            <input type="checkbox" />
            <span />
            <span />
            <span />
          </div>
          <div style="margin: 0 auto;" class={style.wtfLogo} />
        </div>

        <div>
          <div>
            <p class={style.accountsTitle}>YOUR ACCOUNT :</p>
          </div>
          <div class={style.accountBox}>
            <p class={style.accountNum}>Checking ... 1337</p>
            <p class={style.accountBal}>$999,999.00</p>
            <p class={style.availableBal}>Available Balance</p>
          </div>
          {/* <div>
            <h1>Hello, WTF Banking!</h1>
            <Link href="/test">Test</Link>
            <button onClick={dismissUI}>Dismiss</button>
            <AccountButton title="Checking" subtitle="Balance: $100" />
            <AccountButton title="Savings" subtitle="Balance: -$100" />
          </div> */}

          <div class={style.actionButtons}>
            <Link href="/test">
              <div class={style.button}>
                <div class={style.buttonIcon1} />
                <div class={style.buttonTitle}>Deposit(test)</div>
              </div>
            </Link>
            <div class={style.button}>
              <div class={style.buttonIcon2} />
              <div class={style.buttonTitle}>Withdrawal</div>
            </div>
            <div class={style.button}>
              <div class={style.buttonIcon3} />
              <div class={style.buttonTitle}>Transfer</div>
            </div>
            <div class={style.button} onClick={dismissUI}>
              <div class={style.buttonIcon4} />
              <div class={style.buttonTitle}>Exit(dismiss)</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// class AccountButton extends Component {
//   render({ title, subtitle }) {
//     return (
//       <div>
//         <div>{title}</div>
//         <div>{subtitle}</div>
//       </div>
//     )
//   }
// }
