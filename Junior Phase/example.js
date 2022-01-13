function example (obj, num) {
    if (typeof num !== 'numer') throw Error('oops');
    return obj["age"] === num;
  }