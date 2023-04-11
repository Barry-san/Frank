"use strict";

const node = document.createElement("footer");
node.innerHTML = ` <div>&COPY; 2023 boys don't cry</div>
        <div class="links">
            <a href="https://github.com/barry-san" target="_blank" class="underline">Github</a>
            <a href="https://twitter.com/barry9ja" target="_blank" class="underline">Twitter</a>
            <a href="#" class="underline">Linkdn</a>
        </div>`;
node.classList.add("footer");
document.body.appendChild(node);
