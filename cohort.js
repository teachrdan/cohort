class Cohort {
  constructor (set) {
    this.vals = set
    this.sets = [set] // an array of sets
  }

  exists(val) {
    if (!this.vals.has(val)) throw new Error('Value does not exist:', val)
  }

  isValidType(val) {
    if (typeof val !== 'number' && typeof val !== 'string') {
      throw new Error('Value must be a number or string:', val)
    }
  }

  isValidItem(val) {
    Cohort.isValidType(val)
    if (this.vals.size && this.vals.has(val)) throw new Error('Value already exists:', val)
  }

  isValidDeleteKey(val) {
    Cohort.isValidType(val)
    Cohort.exists(val)
  }

  isValidCollection(collection) {
    [...collection].forEach(item => {
      Cohort.isValidItem(item)
    })
  }

  isValidAddition(val) {
    if (Array.isArray([...val])) {
      Cohort.isValidCollection(val)
    } else {
      Cohort.isValidItem(val)
    }
  }

  getSet(val) {
    this.sets.forEach(set => {
      set.forEach(item => {
        if (item === val) {
          return set
        }
      })
    })
  }

  add(arg1, arg2) {
    // add a set all at once
    if (!arg2) {
      if (Array.isArray([...arg1])) {
        Cohort.isValidCollection(arg1)
        return this.sets.push(new Set([...args]))
      } else {
        throw new Error('Input must be a set or array.');
      }
    } else {
      Cohort.isValidAddition(arg1)
      Cohort.isValidType(arg2)
      Cohort.exists(arg2)
      this.sets.forEach(set => {
        set.forEach(item => {
          if (item === arg2) {
            set.add([...arg1])
            return set
          }
        })
      })
    }
  }

  deleteVal(val) {
    Cohort.isValidDeleteKey(val)
    this.sets.forEach(set => {
      if (set.has(val)) set.delete(val)
    })
  }

  deleteSet(val) {
    Cohort.isValidDeleteKey(val)
    this.sets.forEach((set, idx) => {
      if (set.has(val)) this.sets.splice(idx, 1)
    })
  }
}

module.exports = Cohort
