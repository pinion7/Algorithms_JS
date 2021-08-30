function findMatryoshka(matryoshka, size) {
  if (matryoshka.size === size) return true;
  else if (matryoshka.matryoshka === null || matryoshka.matryoshka === undefined) {
    return false;
  }
  return findMatryoshka(matryoshka.matryoshka, size);
}


