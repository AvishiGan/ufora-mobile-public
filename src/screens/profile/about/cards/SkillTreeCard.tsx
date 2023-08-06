import React from "react";
import { Card } from "react-native-paper";
import { styles } from "./styles";
import { CardHeadingBold } from "../../../../constants";

const SkillHexagonCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Skill Tree</CardHeadingBold>
        {/* <Card.Content style={styles.contentWithGap}></Card.Content> */}
      </Card.Content>
    </Card>
  );
};

export default SkillHexagonCard;
