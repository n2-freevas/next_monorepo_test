import styles from './page.module.css'

import { UserIcon } from '@c/aAdminUser/aAdminUserIcon'

export default function Home() {
  return (
    <main className={styles.main}>
      WEB
      <UserIcon iconId={23} backgroundColorCode='#ff0000'/>
    </main>
  )
}
