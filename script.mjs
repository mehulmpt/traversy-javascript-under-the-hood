import fs from 'fs'
import fsPromise from 'fs/promises'

function func1() {
	// this should return a promise which when resolved gives contents of 'contents.txt'
}

function func2() {
	// this should return the contents of 'contents.txt' directly
}

// don't modify these exports
export { func1, func2 }
