'use strict';

// SayHello ------------------------------------------------------------------------------------------------
exports.SayHello = async (req, res) => {
  try {
    console.log(`[INFO] GET Handler SayHello`);
    console.log(`[INFO] request : ${req}`);
    res.status(200).json({
      message: 'hello :)',
    });
  } catch (error) {
    res.status(500).json({
      message: 'hello failed :(',
      error: error.toString(),
    });
    console.log(
      `[ERROR] failure in GET Handler SayHello, error : ${error}`
    );
  }
};
