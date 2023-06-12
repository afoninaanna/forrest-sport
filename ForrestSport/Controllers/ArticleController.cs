using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ForrestSport.Models;
using Microsoft.AspNetCore.Mvc;

namespace ForrestSport.Controllers
{
    [Route("api/article")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly ArticleDbContext _dbContext;

        public ArticleController(ArticleDbContext articleDbContext)
        {
            _dbContext = articleDbContext;
        }
        
        [HttpGet]
        public ActionResult<IEnumerable<Article>> GetArticles()
        {
            return _dbContext.Articles;
        }

        [HttpGet("{articleId:int}")]
        public async Task<ActionResult<Article>> GetById(int articleId)
        {
            var article = await _dbContext.Articles.FindAsync(articleId);
            return article;
        }

        
        [HttpPost]
        public async Task<ActionResult> Create(Article article)
        {
            await _dbContext.Articles.AddAsync(article);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
        
        [HttpPut]
        public async Task<ActionResult> Update(Article article)
        {
            _dbContext.Articles.Update(article);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{articleId:int}")]
        public async Task<ActionResult> Delete(int articleId)
        {
            var article = await _dbContext.Articles.FindAsync(articleId);
            _dbContext.Articles.Remove(article);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}

