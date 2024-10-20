let locations = ["лес", "пещера", "замок", "озеро", "гора"];

function findArtifact() {
    let counter = 0  
    while (counter < locations.length) {
        let currentPosition = locations[counter]
        counter++
        if (currentPosition === "артефакт") {
            console.log("found")
        }
    }


    // Пройди по всем элементам массива locations с помощью цикла.

    // На каждом шаге сравни текущую локацию с "артефактом".

    // Если артефакт найден, выведи сообщение и завершай цикл.
}

// Пример вызова функции
findArtifact();
   
