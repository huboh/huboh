import Header from "./components/Header";
import Paragraph, { ParagraphProps } from "./components/Paragraph";

export default function Text(props: ParagraphProps) {
  return (
    <Paragraph { ...props } />
  );
}

Text.Header = Header;
Text.Paragraph = Paragraph;