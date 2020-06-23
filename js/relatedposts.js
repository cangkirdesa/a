var labelArray = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>&quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if></b:loop></b:if>];
  var relatedPostConfig = {
      homePage: &quot;<data:blog.homepageUrl/>&quot;,
      widgetTitle: &quot;&lt;h2&gt;Dokumen Terkait&lt;/h2&gt;&quot;,
      numPosts: 8,
      summaryLength: 370,
      titleLength: &quot;auto&quot;,
      thumbnailSize:0,
      noImage: &quot;https://3.bp.blogspot.com/-PR8jyNdC4jg/Xt-IeCBjOkI/AAAAAAAAAdY/CGPOgiLNMY0aabTLpVlxFeudRqNMa4kxQCLcBGAsYHQ/s1600/no_images.gif&quot;,
      containerId: &quot;related-post&quot;,
      newTabLink: false,
      moreText: &quot;Read More&quot;,
      widgetStyle: 3,
      callBack: function() {}
  };
