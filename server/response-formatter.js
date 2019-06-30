const isEmpty = obj => {
  return Object.getOwnPropertyNames(obj).length === 0;
};

const sortArticles = (a, b) => {
  const urlRegex = /\/live/;
  const titleRegex = /live:|watch:|summary|results|leaderboard|live updates|bbc sport/i;
  const imgRegex = /breaking_news/;

  if (
    urlRegex.test(a.url) ||
    titleRegex.test(a.title) ||
    imgRegex.test(a.urlToImage)
  ) {
    return -1;
  }

  return 1;
};

exports.formatArticles = res => {
  res.articles.sort(sortArticles);

  return res;
};

exports.formatWeather = res => {
  const todayData = res['daily']['data'][0];
  res['currently']['today'] = todayData;
  res['hourly']['data'].length = 23;
  // res["hourly"]["data"].shift();
  res['daily']['data'].shift();
  delete res['minutely'];
  delete res['flags'];

  return res;
};

exports.formatMta = res => {
  const mtaShuttle = `<svg xmlns="http://www.w3.org/2000/svg" class="mta-line__bus--inline" viewBox="0 200 500 100">
    <path
      d="M453.5 78c-3.333-14-9-24.667-17-32s-19.667-14-35-20c-15.333-6.667-37.333-12.667-66-18S280.666 0 257 0c-23.667 0-49.833 2.667-78.5 8s-50.667 11.333-66 18c-15.333 6-27 12.667-35 20s-13.333 18-16 32l-20 160v223h31v20c0 13.333 4.167 22.667 12.5 28s16.833 5.333 25.5 0 13-14.667 13-28v-20h256v20c0 13.333 5.167 22.667 15.5 28s20.5 5.333 30.5 0 15-14.667 15-28v-20h31V238l-18-160zm-303-39.5c2.667-5 7.334-7.5 14-7.5h205v30h-205c-6.667 0-11.333-2.5-14-7.5s-2.667-10 0-15zM77.5 234l17-122c1.333-6.667 7-10 17-10h293c10 0 15.667 3.333 17 10l17 124c.667 2 1 3.333 1 4 0 4.667-1.667 8.5-5 11.5s-7.667 4.5-13 4.5h-327c-5.333 0-9.667-1.667-13-5s-5-7.667-5-13c0-1.333.333-2.667 1-4zm53 149.5c-6.667 6.333-14.5 9.5-23.5 9.5s-16.833-3.167-23.5-9.5-10-14-10-23 3.333-16.667 10-23c6.667-6.333 14.5-9.5 23.5-9.5s16.833 3.167 23.5 9.5 10 14 10 23-3.333 16.667-10 23zm302 0c-6.667 6.333-14.5 9.5-23.5 9.5s-16.833-3.167-23.5-9.5-10-14-10-23 3.333-16.667 10-23S400 328 409 328s16.833 3.167 23.5 9.5 10 14 10 23-3.333 16.667-10 23z"
      fill="#010002"
    />
  </svg>`;

  const oneTrain =
    '<div class="mta-line mta-line--inline mta-line--1"><span>1</span></div>';
  const twoTrain =
    '<div class="mta-line mta-line--inline mta-line--2"><span>2</span></div>';
  const threeTrain =
    '<div class="mta-line mta-line--inline mta-line--3"><span>3</span></div>';
  const fourTrain =
    '<div class="mta-line mta-line--inline mta-line--4"><span>4</span></div>';
  const fiveTrain =
    '<div class="mta-line mta-line--inline mta-line--5"><span>5</span></div>';
  const sixTrain =
    '<div class="mta-line mta-line--inline mta-line--6"><span>6</span></div>';
  const sevenTrain =
    '<div class="mta-line mta-line--inline mta-line--7"><span>7</span></div>';
  const sixTrainExpress =
    '<div class="mta-line--express mta-line--inline mta-line--6-express"><div>6</div></div>';
  const sevenTrainExpress =
    '<div class="mta-line--express mta-line--inline mta-line--7-express"><div>7</div></div>';
  const aTrain =
    '<div class="mta-line mta-line--inline mta-line--a"><span>A</span></div>';
  const bTrain =
    '<div class="mta-line mta-line--inline mta-line--b"><span>B</span></div>';
  const cTrain =
    '<div class="mta-line mta-line--inline mta-line--c"><span>C</span></div>';
  const dTrain =
    '<div class="mta-line mta-line--inline mta-line--d"><span>D</span></div>';
  const eTrain =
    '<div class="mta-line mta-line--inline mta-line--e"><span>E</span></div>';
  const fTrain =
    '<div class="mta-line mta-line--inline mta-line--f"><span>F</span></div>';
  const gTrain =
    '<div class="mta-line mta-line--inline mta-line--g"><span>G</span></div>';
  const jTrain =
    '<div class="mta-line mta-line--inline mta-line--j"><span>J</span></div>';
  const lTrain =
    '<div class="mta-line mta-line--inline mta-line--l"><span>L</span></div>';
  const mTrain =
    '<div class="mta-line mta-line--inline mta-line--m"><span>M</span></div>';
  const nTrain =
    '<div class="mta-line mta-line--inline mta-line--n"><span>N</span></div>';
  const qTrain =
    '<div class="mta-line mta-line--inline mta-line--q"><span>Q</span></div>';
  const rTrain =
    '<div class="mta-line mta-line--inline mta-line--r"><span>R</span></div>';
  const sTrain =
    '<div class="mta-line mta-line--inline mta-line--s"><span>S</span></div>';
  const wTrain =
    '<div class="mta-line mta-line--inline mta-line--w"><span>W</span></div>';
  const zTrain =
    '<div class="mta-line mta-line--inline mta-line--z"><span>Z</span></div>';

  res['service']['subway']['line'].forEach(subway => {
    subway.name = subway.name.split('');

    if (!isEmpty(subway.text)) {
      subway.text = subway.text.replace(
        new RegExp('\\[' + 1 + '\\]', 'g'),
        oneTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 2 + '\\]', 'g'),
        twoTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 3 + '\\]', 'g'),
        threeTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 4 + '\\]', 'g'),
        fourTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 5 + '\\]', 'g'),
        fiveTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 6 + '\\]', 'g'),
        sixTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 7 + '\\]', 'g'),
        sevenTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + '6D' + '\\]', 'g'),
        sixTrainExpress
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + '7D' + '\\]', 'g'),
        sevenTrainExpress
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'A' + '\\]', 'g'),
        aTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'B' + '\\]', 'g'),
        bTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'C' + '\\]', 'g'),
        cTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'D' + '\\]', 'g'),
        dTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'E' + '\\]', 'g'),
        eTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'F' + '\\]', 'g'),
        fTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'G' + '\\]', 'g'),
        gTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'J' + '\\]', 'g'),
        jTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'L' + '\\]', 'g'),
        lTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'M' + '\\]', 'g'),
        mTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'N' + '\\]', 'g'),
        nTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'Q' + '\\]', 'g'),
        qTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'R' + '\\]', 'g'),
        rTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'S' + '\\]', 'g'),
        sTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'W' + '\\]', 'g'),
        wTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'Z' + '\\]', 'g'),
        zTrain
      );
      subway.text = subway.text.replace(
        new RegExp('\\[' + 'SB' + '\\]', 'g'),
        mtaShuttle
      );
      subway.text = subway.text.replace(
        /<br\s*\/?><br\s*\/?>/gi,
        '<div class="mta-info--break"></div>'
      );
    }
  });
  delete res['service']['subway']['line'][10];
  delete res['service']['MetroNorth'];
  delete res['service']['bus'];
  delete res['service']['BT'];

  return res;
};
