/**
 * 管理者アカウントのアバターアイコンのコンポーネント。
 * 専用のImage Atlasを用い、選択したアイコンでクロップする。
 */
const MemojiBigWidth = 68;
const MemojiBigHeight = 68;
const MemojiWidth = 34;
const MemojiHeight = 34;
const MemojiMiniWidth = 17;
const MemojiMiniHeight = 17;

export interface AccountIconProps{
  iconId: number,
  backgroundColorCode?: string
}

export function UserIcon(prop: AccountIconProps) {
  return (
    <div style={{
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      background: `${prop.backgroundColorCode || "unset"}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: `${MemojiWidth}px`,
        height: `${MemojiHeight}px`,
        background: `url('/adminAccount/memojiAtlas34.png') ${-MemojiWidth * ((prop.iconId - 1) %10)}px ${-MemojiHeight *(Math.floor((prop.iconId - 1)/10))}px`
      }}>
      </div>
    </div>
  );
};

export function UserIconBig(prop: AccountIconProps) {
  return (
    <div style={{
      width: "75px",
      height: "75px",
      borderRadius: "50%",
      background: `${prop.backgroundColorCode || "unset"}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: `${MemojiBigWidth}px`,
        height: `${MemojiBigHeight}px`,
        background: `url('/adminAccount/memojiAtlas68.png') ${-MemojiBigWidth * ((prop.iconId - 1) %10)}px ${-MemojiBigHeight *(Math.floor((prop.iconId - 1)/10))}px`
      }}>
      </div>
    </div>
  );
};

export function UserIconMini(prop: AccountIconProps) {
  return (
    <div style={{
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: `${prop.backgroundColorCode || "unset"}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: `${MemojiMiniWidth}px`,
        height: `${MemojiMiniHeight}px`,
        background: `url('/adminAccount/memojiAtlas17.png') ${-MemojiMiniWidth * ((prop.iconId - 1) %10)}px ${-MemojiMiniHeight *(Math.floor((prop.iconId - 1)/10))}px`
      }}>
      </div>
    </div>
  );
};