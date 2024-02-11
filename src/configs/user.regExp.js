const userRegExp = {
  NAME: /^[a-zA-ZA-яёЁіІїЇҐґєЄ]{2,20}$/,
  PASSWORD: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{5,20}$/,
};

export { userRegExp };
