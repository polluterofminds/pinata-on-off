import {leftKey, rightKey} from './keys.js'
import Body from './body.js'
import create from './create.js'

export default class Guy extends Body {
  constructor (x, y) {
    super(create('svg'))
    this.element.innerHTML = `
    <svg id="guy" width="26.95" height="40">
      <g id="inner-guy">
        <path d="M27.3205 12.9807C27.1023 11.8678 25.8439 10.704 23.5308 10.0566C23.3635 10.013 23.1962 9.96204 23.0144 9.92567L19.9739 9.2492C23.1817 4.79761 24.7674 2.59364 23.4944 1.52439C22.6579 0.818824 21.5232 1.32072 19.6902 2.6882C19.763 1.12432 19.4866 0.273286 18.6282 0.0623444C16.9043 -0.359538 15.8933 2.40452 13.3911 7.78716H13.3984C13.3911 7.78716 13.3911 7.79444 13.3984 7.78716L10.9907 12.5661L12.3218 12.5952L10.7216 15.8902H12.1327L10.8962 18.8289H12.14L10.9689 21.6729H10.9834V21.6802C10.998 21.6802 11.0053 21.6802 11.0198 21.6802L10.9689 21.6875L5.75355 20.9819L5.71718 20.5746C5.57171 19.7454 5.39713 18.9452 4.9898 18.2979C4.43699 17.425 3.46229 16.8285 1.542 16.814L1.51291 17.9051C2.19665 17.8833 2.85129 17.9487 3.41138 18.3051C3.88418 18.6034 4.28424 19.098 4.58974 19.9199C2.91676 19.3526 1.97116 19.5199 1.29469 19.9563C0.945547 20.1818 0.669141 20.48 0.400009 20.7855L1.15649 21.4838C1.20013 21.4183 1.25105 21.3601 1.29469 21.3092C2.10936 20.3418 3.05496 20.3709 4.05875 20.9019C1.89115 21.9421 1.542 23.7751 1.65838 25.0916C1.76022 25.1062 2.72036 25.0916 2.72036 25.0916C2.6258 23.8042 3.54231 22.0803 5.44805 21.5638L4.14603 24.2333H5.20074C5.09891 24.3715 3.57868 26.801 3.32409 27.2883L4.77158 27.3756L3.48412 30.1397L4.29879 30.1469L3.2368 33.1147L4.36425 33.202L3.2368 35.9806H4.71339C4.70612 36.4679 4.73522 36.9116 4.80068 37.3044C4.8225 37.4572 4.8516 37.6026 4.88797 37.7408C4.90979 37.8354 4.93888 37.9227 4.9607 38.01C5.33167 39.1883 6.09542 39.8066 7.19377 39.9739C7.30288 39.9885 7.41199 40.0103 7.52837 40.0175C7.62293 40.0248 7.72476 40.0175 7.81932 39.9957C7.90661 39.9739 7.98662 39.9521 8.06663 39.9303C8.18301 39.8939 8.29939 39.8575 8.40123 39.8212C8.47397 39.7921 8.53943 39.763 8.6049 39.7339C8.64854 39.712 8.69218 39.6902 8.72855 39.6684C8.76492 39.6466 8.80856 39.6248 8.84493 39.6029C8.90312 39.5666 8.96131 39.5302 9.01223 39.4938C9.0486 39.472 9.0777 39.4429 9.11406 39.4211C9.1868 39.3629 9.25954 39.3047 9.31773 39.2465C9.3832 39.1811 9.44866 39.1083 9.50685 39.0429C9.52867 39.0138 9.5505 38.9919 9.57232 38.9628C9.60141 38.9265 9.62323 38.8901 9.64506 38.8537C9.6887 38.781 9.73234 38.7083 9.76871 38.6355C9.79053 38.5991 9.80508 38.5555 9.8269 38.5191C9.83418 38.4973 9.84872 38.4755 9.856 38.4537C9.87054 38.4246 9.87782 38.3882 9.89237 38.3591C9.89964 38.3446 9.90691 38.33 9.90691 38.3082C9.92874 38.2427 9.95056 38.1773 9.9651 38.1118C9.9651 38.0973 9.97238 38.0827 9.97238 38.0754C9.98693 38.0318 9.9942 37.9881 10.0015 37.9445C10.0015 37.9372 10.0087 37.9227 10.0087 37.9154C10.016 37.8645 10.0306 37.8136 10.0378 37.7627C10.0451 37.7336 10.0451 37.7045 10.0524 37.6754C10.0597 37.6463 10.0597 37.6099 10.0669 37.5808C10.0888 37.4353 10.1033 37.2971 10.1106 37.1444C10.1251 36.9625 10.1324 36.7807 10.1324 36.5988C10.1397 36.4024 10.1397 36.2061 10.1469 36.0097L11.609 36.0169L10.1833 33.0783L11.4635 33.0929L10.3215 30.176L16.2715 30.1979L15.2605 33.0783L16.3588 33.1656L15.2605 35.9296H16.5552C16.5407 38.4318 17.4426 39.6466 19.0429 39.8939C19.101 39.9012 19.1665 39.9084 19.232 39.9157C19.4211 39.9375 19.6102 39.923 19.7921 39.8793C22.0251 39.3047 21.9669 37.5954 22.0033 35.9296H23.2762L22.0324 32.991H23.1889L22.207 30.2197L23.4799 30.227L21.9669 27.3756L23.3926 27.4702L21.8796 24.437H23.1235L21.996 21.6802H23.1889L21.8506 18.8289H23.3635L22.3234 15.8902H23.0071V15.8829C23.1744 15.8757 23.3271 15.8611 23.4872 15.8539C23.6763 15.8393 23.8581 15.8175 24.0327 15.7884C24.1927 15.7666 24.3455 15.7375 24.491 15.7084C25.1529 15.5702 25.6984 15.3665 26.1348 15.1119C26.2294 15.0537 26.324 14.9955 26.404 14.9373C26.4476 14.9083 26.484 14.8792 26.5276 14.8428C26.644 14.7482 26.7531 14.6464 26.8477 14.5446C26.9131 14.4791 26.9641 14.4064 27.015 14.3336C27.1386 14.1518 27.2332 13.9627 27.2914 13.7735C27.3568 13.5262 27.3714 13.2571 27.3205 12.9807Z" fill="#FF009E"/>
      </g>
    </svg>`
    this.load(x, y)
    this.height = 40
    this.width = 26.95
    this.speed = 360
    this.vx = 0
    this.vy = 0
  }

  tick (scale) {
    if (leftKey() && !rightKey()) {
      this.vx = -scale(this.speed)
      this.faceLeft = true
    } else if (rightKey() && !leftKey()) {
      this.vx = scale(this.speed)
      this.faceLeft = false
    } else {
      this.vx = 0
    }

    this.walking = leftKey() || rightKey()
  }

  get faceLeft () {
    return !!this._faceLeft
  }

  set faceLeft (value) {
    this._faceLeft = !!value
    this.element.classList.toggle('left', this.faceLeft)
  }

  get walking () {
    return !!this._walking
  }

  set walking (value) {
    this._walking = !!value
    this.element.classList.toggle('walk', this.walking)
  }

  load (x, y) {
    this.x = x
    this.y = y
  }

  toJSON () {
    return [Math.round(this.x), Math.round(this.y)]
  }
}
