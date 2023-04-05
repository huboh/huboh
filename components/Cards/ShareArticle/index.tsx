import { FC } from "react";
import { toast } from "react-hot-toast";
import { ShareArticleProps } from "./share-article";
import { default as dynamic } from "next/dynamic";
import { TbCopy, TbShare, TbBrandTwitter, TbBrandWhatsapp, TbBrandFacebook, TbBrandLinkedin, TbBrandReddit } from "react-icons/tb";

// components
import Text from "../../Text";
import Button from "../../Button";
import styles from "./share-article.module.scss";

// hooks
import useClassString from "../../../hooks/useClassString";

const ShareArticle: FC<ShareArticleProps> = (props) => {
  const link = encodeURIComponent(props.link);
  const title = encodeURIComponent(props.title);
  const header = props.header || "spread the word";
  const className = useClassString(styles["share-article"], props.className);

  return (
    <div className={ className }>
      <Text.Header.H1
        text={ header }
        size={ "extra-small" }
        showFullStop={ false }
        className={ styles["title"] }
      />
      <ul className={ styles["icons"] }>
        <li>
          <Button.Icon
            icon={ <TbCopy /> }
            onClick={
              () => {
                navigator.clipboard.writeText(props.link); toast.success("copied to clipboard successfully", { duration: 4000 });
              }
            }
          />
        </li>
        {
          "share" in navigator ? (
            <li>
              <Button.Icon
                icon={ <TbShare /> }
                onClick={
                  () => {
                    const url = props.link;
                    const title = props.title;

                    navigator
                      .share({ url, title })
                      .then(() => toast.success("thanks for sharing!!!", { duration: 4000 }))
                      .catch(() => toast.error("error occurred sharing article", { duration: 4000 }));
                  }
                }
              />
            </li>
          ) : (
            <>
              <li>
                <Button.ExternalIconLink icon={ <TbBrandTwitter /> } to={ `https://twitter.com/intent/tweet?url=${link}&text=${title}` } />
              </li>
              <li>
                <Button.ExternalIconLink icon={ <TbBrandWhatsapp /> } to={ `whatsapp://send?text?url=${link}&text=${title}` } />
              </li>
              <li>
                <Button.ExternalIconLink icon={ <TbBrandFacebook /> } to={ `https://www.facebook.com/sharer/sharer.php?u=${link}` } />
              </li>
              <li>
                <Button.ExternalIconLink icon={ <TbBrandLinkedin /> } to={ `https://www.linkedin.com/sharing/share-offsite/?mini=true&url=${link}&title=${title}` } />
              </li>
              <li>
                <Button.ExternalIconLink icon={ <TbBrandReddit /> } to={ `https://reddit.com/submit?url=${link}&title=${title}&selftext=true` } />
              </li>
            </>
          )
        }
      </ul>
    </div >
  );
};

export default dynamic(
  () => Promise.resolve(ShareArticle), { ssr: false }
);