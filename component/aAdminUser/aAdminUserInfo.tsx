import { UserIcon } from '@/components/aAdminUser/aAdminUserIcon'
import { AccountIconProps } from './aAdminUserIcon'
import { secondary, text } from '@/style/aTheme/color'
import { Typography } from '@mui/material'
interface AccountInfoProps{
  iconProps: AccountIconProps
  userName: string,
  roleName: string
}

export function UserInfo(prop: AccountInfoProps) {
  return (
    <div style={{display: "flex"}}>
      <UserIcon iconId={prop.iconProps.iconId} backgroundColorCode={prop.iconProps.backgroundColorCode}/>
      <div style={{marginLeft: 8, display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
        <div style={{backgroundColor: secondary.light, borderRadius: 20, padding:"2px 6px", fontSize: 8, scale: 0.8, transformOrigin: 0}}>
          {prop.roleName}
        </div>
        <Typography variant="caption" color="GrayText">{prop.userName}</Typography>
      </div>
    </div>
  );
};

