function unpackGiftbox(giftBox, wish) {
  for (let el of giftBox) {
    if (Array.isArray(el)) {
      let result = unpackGiftbox(el, wish);
      if (result) {
        return result;
      }
    }
    else if (el === wish) return true;
  }
  return false;
}


