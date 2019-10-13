import path from 'path';
import * as express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import manifestHelpers from 'express-manifest-helpers';
import bodyParser from 'body-parser';
import paths from '../../config/paths';
import errorHandler from './middleware/errorHandler';
import serverRenderer from './middleware/serverRenderer';

require('dotenv').config();

const app = express.default();

// Use Nginx or Apache to serve static assets in production or remove the if() around the following
// lines to use the express.static middleware to serve assets for production (not recommended!)
app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const manifestPath = path.join(paths.clientBuild, paths.publicPath);

app.use(
  manifestHelpers({
    manifestPath: `${manifestPath}/manifest.json`,
  })
);

app.use(serverRenderer());

app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `[${new Date().toISOString()}]`,
    chalk.blue(`App is running: http://localhost:${process.env.PORT || 3000}`)
  );
});

export default app;
