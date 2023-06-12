using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ForrestSport.Models
{
	[Table("article")]
	public class Article
	{
		[Key]
		[Column("article_id")]
		public int Id { get; set; }

		[Column("article_image")]
		public string Image { get; set; }

		[Column("article_title")]
		public string Title { get; set; }

		[Column("article_annotation")]
		public string Annotation { get; set; }

		[Column("article_tags")]
        public string Tags { get; set; }

		[Column("article_category")]
		public string Category { get; set; }

        [Column("article_content")]
        public string Content { get; set; }

        [Column("article_author")]
        public string Author { get; set; }
    }
}

