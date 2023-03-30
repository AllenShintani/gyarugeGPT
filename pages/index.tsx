import React, { useState } from "react";
import { Button, Typography, List, ListItem, ListItemText } from "@mui/material";

type StoryEvent = {
  text: string;
  choices: string[];
  results: StoryEvent[];
};

const initialStory: StoryEvent = {
  text: "あなたは陰鬱とした魔法世界を冒険する一人の剣士です。",
  choices: [
    "魔法の森を探索する",
    "古代の遺跡に向かう",
    "村の人々に話を聞く",
    "魔法の武器を探す"
  ],
  results: [
    {
      text: "魔法の森に入りました。美しい光景に見とれますが、危険な生物が潜んでいます。",
      choices: [
        "森の奥へ進む",
        "安全な場所でキャンプする",
        "森の生物と戦う",
        "森を出て別の場所へ行く"
      ],
      results: [ /* 以下省略 */ ]
    },
    /* 他の選択肢の結果もここに記述 */
  ]
};

const App: React.FC = () => {
  const [story, setStory] = useState<StoryEvent>(initialStory);
  const [turn, setTurn] = useState(1);

  const handleChoice = (index: number) => {
    setStory(story.results[index]);
    setTurn(turn + 1);
  };

  return (
    <div>
      <Typography variant="h5">{turn}ターン目: {story.text}</Typography>
      <List>
        {story.choices.map((choice, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${index + 1}. ${choice}`} />
            <Button variant="contained" onClick={() => handleChoice(index)}>
              選択
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default App;