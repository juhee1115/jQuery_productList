$(function () {
  const products = [
    {
      id: 1,
      name: "러닝화",
      price: 129000,
      category: "shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
    },
    {
      id: 2,
      name: "백팩",
      price: 89000,
      category: "bag",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1200",
    },
    {
      id: 3,
      name: "볼캡",
      price: 39000,
      category: "cap",
      image:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200",
    },
    {
      id: 4,
      name: "스니커즈",
      price: 159000,
      category: "shoes",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200",
    },
    {
      id: 5,
      name: "크로스백",
      price: 99000,
      category: "bag",
      image:
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200",
    },
    {
      id: 6,
      name: "버킷햇",
      price: 45000,
      category: "cap",
      image:
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1200",
    },
  ];

  // 모바일 버튼 클릭시
  $(".mobile-btn").click(function () {
    $(".mobile-menu").slideToggle();
  });

  // 화면 크기 변경 이벤트
  $(window).resize(function () {
    if ($(window).width() > 768) {
      $(".mobile-menu").slideUp();
    }
  });

  // 처음 페이지 로드시 전체 출력
  renderProducts(products);

  // 상품 출력 함수
  function renderProducts(list) {
    $(".product-wrap").empty();

    $.each(list, function (index, item) {
      $(".product-wrap").append(`
        <div class="product">
          <div class="pro-img">
            <img src="${item.image}" alt="${item.name}" />
          </div>

          <div class="product-content">
            <h3>${item.name}</h3>

            <p class="price">
              ${item.price.toLocaleString()} 원
            </p>

            <div class="btn-wrap">
              <button class="cart-btn">장바구니</button>
              <button class="like-btn">❤</button>
            </div>
          </div>
        </div>
      `);
    });
  }

  // 좋아요 버튼 (동적 요소라 이벤트 위임 사용)
  $(document).on("click", ".like-btn", function () {
    $(this).toggleClass("active");
  });

  // 검색 기능
  $(".search-input").on("keyup", function () {
    const inputValue = $(this).val().toLowerCase();

    const filter = products.filter((item) =>
      item.name.toLowerCase().includes(inputValue)
    );

    renderProducts(filter);
  });

  // 탭 버튼 클릭
  $(".tab-btn").on("click", function () {
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");

    const category = $(this).data("category");

    if (category === "all") {
      renderProducts(products);
    } else {
      const filter = products.filter(
        (item) => item.category === category
      );

      renderProducts(filter);
    }
  });
});