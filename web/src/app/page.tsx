import { Button, Card, Flex, Grid, IconButton } from "@radix-ui/themes";
import PaperIcon from "../../images/icon-paper.svg";
import RockIcon from "../../images/icon-rock.svg";
import ScissorsIcon from "../../images/icon-scissors.svg";

import Image from "next/image";
export default function Home() {
  return (
    <Flex className="home" height="100vh" justify="between" direction="column" >
      <header>
        <Flex align="center" justify="center" className="mt-8">
          <Card className="header">
            <Flex align="center" justify="between">
              <div className="title">
                <h1>Rock<br />Paper<br />Scissors</h1>
              </div>
              <Card className="score">
                <Flex direction="column" align="center" justify="center" className="px-4">
                  <p className="scoreTitle">Score</p>
                  <p className="scoreValue">12</p>
                </Flex>
              </Card>
            </Flex>
          </Card>
        </Flex>
      </header>
      <main>
        <Flex align="center" justify="center">
          <Grid className="handOptions" columns="3" rows="2" height="15rem" width="15rem">
            <IconButton className="rock">
              <Image src={RockIcon} alt="Rock" />
            </IconButton>
            <IconButton className="paper">
              <Image src={PaperIcon} alt="Paper" />
            </IconButton>
            <IconButton className="scissors">
              <Image src={ScissorsIcon} alt="Scissors" />
            </IconButton>
          </Grid>
        </Flex>
      </main>
      <footer>
        <Flex align="center" justify="end" direction="column">
          <div className="rules ml-auto mr-8 mb-4">
            <Button
              className="px-6"
              style={{ backgroundColor: 'transparent', border: '1px solid inherit', textTransform: 'uppercase' }}>
              Rules
            </Button>
          </div>
          <div className="attribution mt-auto">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="#">Your Name Here</a>.
          </div>
        </Flex>
      </footer>
    </Flex >
  );
}
