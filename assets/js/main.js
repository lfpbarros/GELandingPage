document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("main-nav");
    const toggle = document.getElementById("menu-toggle");
    const yearTarget = document.getElementById("current-year");

    if (yearTarget) {
        yearTarget.textContent = new Date().getFullYear();
    }

    if (toggle && nav) {
        toggle.setAttribute("aria-expanded", "false");

        toggle.addEventListener("click", () => {
            nav.classList.toggle("is-open");
            toggle.classList.toggle("is-open");
            const isOpen = nav.classList.contains("is-open");
            toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        nav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("is-open");
                toggle.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    const galleryCollections = [
        {
            name: "Buffet",
            description: "Buffet completo, finger foods e apresentações gastronômicas preparadas pela nossa equipe.",
            folder: "Buffet",
            images: [
                "04e3193f-4193-4144-a06d-9d169b2f6b93.jpg",
                "061e78f7-f369-442c-bdf7-39d46f71b7f6.jpg",
                "0cac12f6-f325-441d-8ff8-6b350b49eb6a.jpg",
                "17f3e7a1-e0cf-4181-bb88-5f2d23c9e5b0.jpg",
                "32af841e-8191-4414-82d3-a7eec223df20.jpg",
                "3d7b8709-318a-40e7-a7be-b512dd32b459.jpg",
                "5e356787-e8e1-4653-897b-8f32a33a5696.jpg",
                "682b8e97-dd3a-4d89-91ef-ce1020eb0438.jpg",
                "68d41c0f-a344-475c-ab10-40b24c344eac.jpg",
                "6df44a2c-5466-4cad-80f3-5a0476d8c965.jpg",
                "7a9c8ca6-fc12-4565-9cf2-fc2b653b1c91.jpg",
                "821c1612-b164-4d43-8d3a-3adb59de88d6.jpg",
                "857a87f2-901c-4dde-8918-168cbffa7e84.jpg",
                "935cf501-c75f-45b5-a0f9-9128f7cd2b43.jpg",
                "9aafe80d-e75e-4fa8-9abd-4faa2156213e.jpg",
                "9ce5bbc1-ffab-4055-a660-7ed827ea53d9.jpg",
                "c1408ed9-458c-446d-9263-4365344a0ffe.jpg",
                "c1c7f05d-55f8-400a-9cb3-2af614c67574.jpg",
                "d8133b99-74fd-4567-8491-3fb9fdd69acc.jpg",
                "da8461a0-6357-4427-9f46-a43022e72623.jpg",
                "dad0ba1b-c4db-4de1-8e59-a6cd580a50ac.jpg",
                "deddf4df-a93b-4ce3-b4d3-56fd919e726a.jpg",
                "e12419fe-e96d-41bf-8a94-fa8520838b84.jpg",
                "e3384e10-84c2-4791-9289-6c44a1513267.jpg",
                "ec0fade7-69bc-4d78-88b5-93274364ea57.jpg",
                "f8bba211-d946-4819-827a-9e139af6ea4e.jpg",
                "fe0f76c2-1118-4777-886a-ada597aad736.jpg"
            ]
        },
        {
            name: "Eventos",
            description: "Momentos especiais, montagens personalizadas e bastidores das celebrações.",
            folder: "Eventos",
            images: [
                "0201547a-792e-44a4-8b12-c860c0454276.jpg",
                "061e78f7-f369-442c-bdf7-39d46f71b7f6.jpg",
                "1066d966-073a-4a0d-8743-ca67c1a2c687.jpg",
                "19439fa4-5836-4cb8-871e-01a0761c8019.jpg",
                "1bce0384-6fac-48da-ba20-01ffe74c24d8.jpg",
                "25948ff8-9bfd-4eed-8329-408c834ec8c9.jpg",
                "3ca12e66-826e-4872-876a-9e036c964a1d.jpg",
                "3d31ddee-e0ba-4a82-ac0c-a3c5141c97de.jpg",
                "3d7b8709-318a-40e7-a7be-b512dd32b459.jpg",
                "3ed48863-7987-4e0b-b20d-126b7ed9affe.jpg",
                "3f4ab623-6058-40f0-b78d-09444934a518.jpg",
                "4275e273-2f3a-4c34-8cd8-b14e9dffde82.jpg",
                "6d3aeace-282b-4379-b609-1f11766ee82c.jpg",
                "72996242-371d-4fc8-b670-797edcb80d62.jpg",
                "743a0311-7333-40e8-8a1d-52795613b550.jpg",
                "764132f7-54b0-4ce5-986b-ba8c49304881.jpg",
                "7c414ac1-463e-49e0-a455-9f3eb6564738.jpg",
                "7db231e1-cdef-47f7-83fa-681b2d0c6f31.jpg",
                "81b1bf70-4f4c-4c78-95f0-c26878d25819.jpg",
                "84ed7400-e7c4-4a79-ad9d-adafb6a74d2d.jpg",
                "85431bde-bacc-450f-90eb-32b107056478.jpg",
                "8e4fb035-e3f7-429a-aaa2-08cfe4806e63.jpg",
                "90925f5b-467a-437e-9ffb-60e296614ef5.jpg",
                "9acd3efa-753b-4c4e-80e1-18be6cf97eeb.jpg",
                "a19b0ad3-5204-45cd-8fb1-742899c1ae71.jpg",
                "ac7ef672-ecc4-45a3-b5a8-1a877ed7efcc.jpg",
                "af83538f-adec-4722-a252-3820598e3298.jpg",
                "b1f6ec3c-a3af-4b75-927b-04c06c80b21d.jpg",
                "b606a45d-bc11-45f7-9d5a-823dac99bac0.jpg",
                "c47145e1-71e5-465d-ad10-13d8ac0cadb7.jpg",
                "c6945a5a-4372-4d02-9a04-fe9cf19117ea.jpg",
                "d8133b99-74fd-4567-8491-3fb9fdd69acc.jpg",
                "e07bb180-46f6-4f8e-b57e-7ab442d0c3ad.jpg",
                "f336b818-f63e-418c-8854-7e8e7e753b6e.jpg",
                "f861c767-dfff-4fd1-b051-019459af5a26.jpg",
                "f93b8166-97ca-4929-ac7e-092e906144dc.jpg",
                "fd8e90a9-a01b-44f1-bdb2-2b05b32766c3.jpg",
                "fe0f76c2-1118-4777-886a-ada597aad736.jpg"
            ]
        },
        {
            name: "Louças",
            description: "Nosso acervo de louças, taças e utensílios que elevam a experiência à mesa.",
            folder: "Louças",
            images: [
                "042dcd92-58f8-4364-a666-c0273e74453f.jpg",
                "04b561db-f908-42a0-8395-97198fc9a6ac.jpg",
                "16626586-199e-4772-8bcb-8e02dc76fb85.jpg",
                "20a20e03-66ef-4b3c-b21d-b8d8e013609a.jpg",
                "230dbf82-52f7-4ede-b2b8-9b4bd66528d0.jpg",
                "24023fa4-3969-4e6f-ab54-b02a6bdcd8f8.jpg",
                "24c5e0bb-8f87-4368-974b-376727d02785.jpg",
                "2b8a30c7-c401-43ca-b2aa-f6f80e5ac56e.jpg",
                "2eb3f61c-d052-415b-bf69-6ef487f7498f.jpg",
                "30c092c0-d74e-4b4f-ba32-7e08449dc928.jpg",
                "37c03ba7-fe23-4a06-b5f0-9e2e3cb6ca0e.jpg",
                "6255b9e4-980d-4264-867a-3a19df0d4834.jpg",
                "62aac0a0-b8db-4155-af05-10cf5f48306b.jpg",
                "63440942-0b97-497b-84e6-f1ecf579f902.jpg",
                "71165d01-71e3-4b7c-a060-4f0cfb600499.jpg",
                "7210928a-9af6-404b-b1a9-44af510b96da.jpg",
                "838907b2-284a-4cb8-a2c6-e2574120ccef.jpg",
                "88ca3c6c-5c8c-484e-953b-d64abf5dead5.jpg",
                "a0b3b40c-03b7-43b5-b64a-2db148b1e7d6.jpg",
                "b60bdec7-090d-481b-8a84-3dc42f5ef8d6.jpg",
                "c142ac90-f490-4fe9-b83c-5fe127fe932f.jpg",
                "c2094d04-c4ad-46b0-895f-3df1a532334d.jpg",
                "c546d9a9-3447-436e-bad8-2b9abab0cd3d.jpg",
                "c5f327f2-e9df-45f2-89b9-28f3e263c4df (1).jpg",
                "c5f327f2-e9df-45f2-89b9-28f3e263c4df.jpg",
                "d71e6fa2-6a71-4e93-8be1-280eb8a77f3d.jpg",
                "d74cbb54-9991-487b-99b8-ce3ab82046bf.jpg",
                "dccf28ad-00e1-4f4d-bea0-fd4ec1ecec90.jpg",
                "f1aa56fe-f7b0-482c-9c4b-e082a8de6598.jpg",
                "f5d66458-b3cd-40a2-960b-af5d5c61fabc.jpg"
            ]
        },
        {
            name: "Locações",
            description: "Estruturas, mobiliários e ambientação disponíveis para compor diferentes estilos de evento.",
            folder: "Locações",
            images: [
                "0292ff52-e2ac-44a3-8501-200b7e96e6a9.jpg",
                "071424c5-16e1-4d30-ac32-595899c77d04.jpg",
                "080f00b6-9ea3-429d-817c-b56089d42e1a.jpg",
                "0f474649-66ef-41c1-b799-db777bd2bbc9.jpg",
                "15c8b0f9-04ab-4d3c-8ab3-05368bee54e9.jpg",
                "1ec7a892-50f2-4b32-ab16-aa23867ad518.jpg",
                "2237ee9a-ded7-40d2-a743-c728a2b037bd.jpg",
                "24023fa4-3969-4e6f-ab54-b02a6bdcd8f8.jpg",
                "24c5e0bb-8f87-4368-974b-376727d02785.jpg",
                "2eb3f61c-d052-415b-bf69-6ef487f7498f.jpg",
                "2f9b05b7-cf8b-4de3-aebe-ca81fcc74ca3.jpg",
                "305a8195-d80a-4689-9bca-15d0bff47f10.jpg",
                "34ee18f6-04ae-47f2-82f4-fdbad7cc5a89.jpg",
                "37fd4c38-8d63-4c25-bdfb-18bd5982ead3.jpg",
                "3a4cfbcb-3436-425f-98f6-2df3de0367a4.jpg",
                "4a77ee25-cb79-46aa-9739-a811565d0e80.jpg",
                "6480bc93-d005-4a3e-8272-cf3645434535.jpg",
                "66d08fdb-b869-47ce-8509-b42c82571bcc.jpg",
                "68f8fb9a-3bd7-4266-9136-52464dc52f16.jpg",
                "70501c7b-6980-4599-9b70-5d7d3a6e8521.jpg",
                "78c0b1a0-d8e9-4058-ae3d-22c484d96a0d.jpg",
                "83286a87-2233-423a-a1a1-3c54f0ec738a.jpg",
                "899aab12-c632-4e2f-bf2f-7c1a809f71ea.jpg",
                "97bd9909-5045-43b7-be10-004ed5498257.jpg",
                "9cdb48d8-8b9e-4202-824f-e096316f5f20.jpg",
                "a5b2770e-f524-4724-aae8-e4f046a0a1c3.jpg",
                "a836604b-83b2-413c-a14b-74866e8d8796.jpg",
                "adef594b-df59-4865-9fef-f3675e1b3a12.jpg",
                "b2adbc7b-735d-419d-a9a9-cc3d34f93504.jpg",
                "c130a914-a5af-404a-9d81-3f784d4c8290.jpg",
                "c2094d04-c4ad-46b0-895f-3df1a532334d.jpg",
                "c34c2015-fdd6-4410-b144-57a117d945cb.jpg",
                "ce61058c-1772-4290-9a88-f54094f7d532.jpg",
                "d808d030-8f8a-4ce1-8bba-501a0a88a562.jpg",
                "e53fc5d9-f29b-4cf2-8ed7-f6b456c926af.jpg",
                "e9fb1239-8121-4f77-b26d-d696a0c89df2.jpg",
                "f040113c-0a72-4c6c-9db5-72a7070cf576.jpg",
                "f5bb14bf-34e8-4afd-adc9-4ad3711227d5.jpg",
                "f7d752d4-77b4-4d0d-addd-64146b5b6017.jpg",
                "fcb1c197-204a-445c-9367-f8d0313a3c60.jpg"
            ]
        },
        {
            name: "Mesas e Cadeiras",
            description: "Composições de mesas, cadeiras e bistrôs para recepções, jantares e cerimônias.",
            folder: "Mesas e Cadeiras",
            images: [
                "043ff2f5-6b17-4bd9-86d2-71c198a9a0ca.jpg",
                "0957d7fc-3c36-44c3-87d7-cbedc5c764b1.jpg",
                "14ac69e4-99a5-4ac6-9540-a51865051ec4.jpg",
                "2a0974b6-9f29-42db-94fe-07c66f47e4ae.jpg",
                "33830ebf-0034-4791-b7d2-a35b0f921ee6.jpg",
                "4255897b-aa9b-4eb4-98cf-9c7b1c95202c.jpg",
                "4d6113d4-63cd-4c2d-b199-0f0c0f4292b1.jpg",
                "5e0d9969-64c4-4138-a656-9fc508c19b44.jpg",
                "650ef2cc-8760-4c44-b378-04ea8fe0cb6f.jpg",
                "6814bd1b-f568-4178-8185-153c43601690.jpg",
                "79b49bfd-df83-45c0-a759-f8fa45c0b328.jpg",
                "96ca9a9f-8ce0-44e0-8edb-c812c4b4ccc2.jpg",
                "983f5f3f-2c1e-48b4-ba3b-737b05674f12.jpg",
                "a859c10f-841d-40b7-96d6-3971c8686555.jpg",
                "a954c84b-454e-4696-83b3-a053f7875add.jpg",
                "cc09d319-8a86-41fd-b944-107c917d2bdb.jpg",
                "db6c1ad4-32a5-4f3f-ac42-416e95672133.jpg",
                "eb7d64dc-cbe1-4726-9f9d-bde19dc0eda4.jpg",
                "fbd08c54-f83a-4b06-a978-39d885888bad.jpg",
                "fe032370-85e6-4607-86c1-d44651f457e3.jpg",
                "ff76152a-5dc9-4f1c-94d8-d8d46cd2dc02.jpg"
            ]
        }
    ];

    const galleryButtonsContainer = document.getElementById("gallery-buttons");
    const galleryViewer = document.getElementById("gallery-viewer");
    const imageElement = document.getElementById("carousel-image");
    const titleElement = document.getElementById("carousel-title");
    const descriptionElement = document.getElementById("carousel-description");
    const counterElement = document.getElementById("carousel-counter");
    const openLink = document.getElementById("carousel-open");
    const prevButton = document.getElementById("carousel-prev");
    const nextButton = document.getElementById("carousel-next");

    let currentCollectionIndex = -1;
    let currentSlideIndex = 0;
    let autoPlayTimer = null;
    const AUTO_PLAY_INTERVAL_MS = 1500;

    if (
        galleryButtonsContainer &&
        galleryViewer &&
        imageElement &&
        titleElement &&
        descriptionElement &&
        counterElement &&
        openLink &&
        prevButton &&
        nextButton
    ) {
        const getButtons = () => galleryButtonsContainer.querySelectorAll(".gallery__button");

        const focusButton = (index) => {
            const buttonList = getButtons();
            const target = buttonList[index];
            if (target) {
                target.focus();
            }
        };

        const updateButtonsState = () => {
            getButtons().forEach((button, index) => {
                const isActive = index === currentCollectionIndex;
                button.classList.toggle("is-active", isActive);
                button.setAttribute("aria-selected", isActive ? "true" : "false");
            });
        };

        const updateViewer = () => {
            if (currentCollectionIndex < 0) {
                return;
            }

            const collection = galleryCollections[currentCollectionIndex];
            const total = collection.images.length;
            const imageFile = collection.images[currentSlideIndex];
            const imagePath = encodeURI(`assets/images/${collection.folder}/${imageFile}`);

            imageElement.src = imagePath;
            imageElement.alt = `${collection.name} - foto ${currentSlideIndex + 1}`;
            titleElement.textContent = collection.name;
            descriptionElement.textContent = collection.description;
            counterElement.textContent = `${String(currentSlideIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
            openLink.href = imagePath;
            openLink.setAttribute("aria-label", `Abrir ${collection.name} foto ${currentSlideIndex + 1} em uma nova aba`);
        };

        const setActiveCollection = (index) => {
            if (index === currentCollectionIndex || !galleryCollections[index]) {
                return;
            }

            currentCollectionIndex = index;
            currentSlideIndex = 0;
            updateButtonsState();
            updateViewer();
            galleryViewer.classList.remove("is-hidden");
        };

        const showNext = () => {
            if (currentCollectionIndex < 0) {
                return;
            }

            const collection = galleryCollections[currentCollectionIndex];
            currentSlideIndex = (currentSlideIndex + 1) % collection.images.length;
            updateViewer();
        };

        const showPrevious = () => {
            if (currentCollectionIndex < 0) {
                return;
            }

            const collection = galleryCollections[currentCollectionIndex];
            currentSlideIndex = (currentSlideIndex - 1 + collection.images.length) % collection.images.length;
            updateViewer();
        };

        const showNextWithAutoCategory = () => {
            if (currentCollectionIndex < 0) {
                return;
            }

            const collection = galleryCollections[currentCollectionIndex];
            const isLastSlide = currentSlideIndex === collection.images.length - 1;

            if (isLastSlide) {
                const nextCollectionIndex = (currentCollectionIndex + 1) % galleryCollections.length;
                setActiveCollection(nextCollectionIndex);
                return;
            }

            showNext();
        };

        const stopAutoPlay = () => {
            if (autoPlayTimer) {
                window.clearInterval(autoPlayTimer);
                autoPlayTimer = null;
            }
        };

        const startAutoPlay = () => {
            stopAutoPlay();

            if (currentCollectionIndex < 0) {
                return;
            }

            autoPlayTimer = window.setInterval(() => {
                showNextWithAutoCategory();
            }, AUTO_PLAY_INTERVAL_MS);
        };

        const restartAutoPlay = () => {
            startAutoPlay();
        };

        galleryCollections.forEach((collection, index) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "gallery__button";
            button.textContent = collection.name;
            button.setAttribute("role", "tab");
            button.setAttribute("aria-selected", "false");

            button.addEventListener("click", () => {
                setActiveCollection(index);
                restartAutoPlay();
            });

            button.addEventListener("keydown", (event) => {
                const total = galleryCollections.length;
                if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                    event.preventDefault();
                    const direction = event.key === "ArrowRight" ? 1 : -1;
                    const nextIndex = (index + direction + total) % total;
                    focusButton(nextIndex);
                }

                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveCollection(index);
                    restartAutoPlay();
                }
            });

            galleryButtonsContainer.appendChild(button);
        });

        nextButton.addEventListener("click", () => {
            showNextWithAutoCategory();
            restartAutoPlay();
        });

        prevButton.addEventListener("click", () => {
            showPrevious();
            restartAutoPlay();
        });

        document.addEventListener("keydown", (event) => {
            if (galleryViewer.classList.contains("is-hidden")) {
                return;
            }

            if (event.key === "ArrowRight") {
                showNextWithAutoCategory();
                restartAutoPlay();
            }

            if (event.key === "ArrowLeft") {
                showPrevious();
                restartAutoPlay();
            }
        });

        setActiveCollection(0);
        startAutoPlay();
    }
});
