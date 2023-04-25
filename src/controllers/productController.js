const productService = require("../services/productService");

exports.createProduct = async (req, res) => {
  try {
    const {
      title,
      author,
      publisher,
      publication_date,
      isbn,
      description,
      price,
      image_path,
      category,
    } = req.body;

    const result = await productService.createProduct(
      title,
      author,
      publisher,
      publication_date,
      isbn,
      description,
      price,
      image_path,
      category
    );

    res.status(200).json({
      message: "상품이 업로드되었습니다.",
      data: result,
    });
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "서버 오류가 발생했습니다.",
    });
  }
};

exports.getProductList = async (req, res) => {
  try {
    const result = await productService.getProducts();
    //res.render("productdummy");
    res.status(200).json({
      message: "상품이 업로드되었습니다.",
      data: result,
    });
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "서버 오류가 발생했습니다.",
    });
  }
};

exports.getProductQueryById = async (req, res) => {
  try {
    const { book } = req.query;

    const result = await productService.getProductQuery(book);

    res.status(200).json({
      message: "성공적으로 업로드되었습니다.",
      data: result,
    });
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "서버 오류가 발생했습니다.",
    });
  }
};


exports.getProductById = async (req, res) => {
  try {
    const id = req.params._id;
    const result = await productService.getProduct(id);

    res.status(200).json({
      message: "성공적으로 업로드되었습니다.",
      data: result,
    });
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "서버 오류가 발생했습니다.",
    });
  }
};

exports.getProductByCategory = async (req, res) => {
  try {
    const categoryName = req.params.category;
    const result = await productService.getProductCategory(categoryName);
    res.status(200).json({
      message: "성공적으로 업로드되었습니다.",
      data: result,
    });
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "서버 오류가 발생했습니다.",
    });
  }
};

// ISBN로 Product 상세페이지 접근
exports.getProductByISBN = async (req, res) => {
  try {
    const productIsbn = req.params.isbn;
    const result = await productService.getProductISBN(productIsbn);

/*    res.status(200).json({
      message: "성공적으로 업로드되었습니다.",
      data: result,
    }); */

    // FE-황반석 수정함
    res.render("book-detail/book-detail.html");

  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "서버 오류가 발생했습니다.",
    });
  }
};

//키워드 검색 기능
exports.keywordProduct = async(req, res) => {
  try{
    const { keyword } = req.query;

    console.log(keyword);
    const result = await productService.searchwordProduct(keyword);

    res.status(200).json({
      message:"키워드 검색이 완료되었습니다.",
      data: result,
    });
  } catch(error){
    res.status(error.status || 500).json({
      message: error.message || "서버 오류가 발생했습니다.",
    });
  }
}

//Product 업데이트
exports.updateProduct = async (req, res) => {
  try {
    const { book } = req.query;

    console.log(book);
    const {
      title,
      author,
      publisher,
      publication_date,
      isbn,
      description,
      price,
      image_path,
      category,
    } = req.body;

    const result = await productService.updateProduct(
      { book },
      {
        title,
        author,
        publisher,
        publication_date,
        isbn,
        description,
        price,
        image_path,
        category,
      }
    );

    res.status(200).json({
      message: "성공적으로 업데이트가되었습니다.",
      data: result,
    });
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "서버 오류가 발생했습니다.",
    });
  }
};

//Product 삭제하기
exports.deleteProduct = async (req, res) => {
  try {
    const { book } = req.query;
    const result = await productService.deleteProduct(book);

    res.status(200).json({
      message: "삭제되었습니다.",
      data: result,
    });
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "서버 오류가 발생했습니다.",
    });
  }
};
