import { Box, Card, Container, Grid } from "@radix-ui/themes";

export default function Home() {
  return (
    <Grid columns="1" width="auto">
      <Box height="9" className="header mx-10 my-2">
        <Card size="1">
          <div className="title">
            <h1>Rock<br />Paper<br />Scissors</h1>
          </div>
          <div className="score">Score `${12}`</div>
        </Card>
      </Box>
      <Box height="9">
        <main>
          <div className="handOptions">
            <div className="option">rock</div>
            <div className="option">paper</div>
            <div className="option">scissor</div>
          </div>
        </main>
      </Box>
      <Box height="9">
        <footer>
          <div className="rules">
            <button>Rules</button>
          </div>
        </footer>
      </Box>
    </Grid>
  );
}
