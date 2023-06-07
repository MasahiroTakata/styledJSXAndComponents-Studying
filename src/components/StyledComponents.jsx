// StyledComponentsライブラリのインポート
import styled from "styled-components";
// スタイルを適用したコンポーネントを定義する
export const StyledComponents = () => {
  return (
    // この記述だと、いちいち「div class="~"」という記載が不要というメリット？？
    // divタグ
    <SContainer>
      {/* pタグ */}
      <STitle>styled componentsです</STitle>
      {/* buttonタグ */}
      <SButton>ボタン</SButton>
    </SContainer>
  );
};
/* styled.は必須、それ以降はhtmlに存在するタグを使用する */
const SContainer = styled.div`
  border: solid 1px #aaa;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #aaa;
`;

/* styled jsxではホバーは使えなかったが、styleComponentsでは使用可能 */
const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;
