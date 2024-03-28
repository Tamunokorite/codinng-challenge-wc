#! /usr/bin/env bun

const args = process.argv.slice(2)

const readFile = async (filename: string) => {
    const file = Bun.file(filename)
    return file
}

async function main() {
    try {
        const option  = args[0].startsWith('-') ? args[0] : ''
        const filename = args[0].startsWith('-') ? (args.length > 1 ? args[1] : null) : args[0]

        let stdInData = await Bun.stdin.text()

        const file =  filename !== null ? await readFile(filename) : stdInData
        
        const content = typeof file !== 'string' ? await file.text() : file
        const noOfBytes = typeof file !== 'string' ? file.size : file.length
        const noOfLines = content.split('\n').length
        const noOfWords = content.split(/\s+/).filter((word: string) => word !== '').length
        const noOfChars= content.split('').length

        switch (option) {
            case '-c':
                console.log(`${noOfBytes} ${filename !== null ? filename : ''}`)
                return
            case '-l':
                console.log(`${noOfLines} ${filename !== null ? filename : ''}`)
                return
            case '-w':
                console.log(`${noOfWords} ${filename !== null ? filename : ''}`)
                return
            case '-m':
                    console.log(`${noOfChars} ${filename !== null ? filename : ''}`)
                    return
            default:
                console.log(`${noOfLines} ${noOfWords} ${noOfBytes} ${filename !== null ? filename : ''}`)
                return
    
        }
    } catch (error: any) {
        console.error('Error reading file:', error.message)
    }
}

main().then(() => process.exit(1))