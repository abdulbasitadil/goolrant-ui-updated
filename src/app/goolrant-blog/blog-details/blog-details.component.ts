import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  blogDetails : any = {
    0:'Mobile Commerce (M-Commerce)',
    1:'Market Economy Design',
    2:'5G Tech'
  }
  noOfBlogs:any;

  selectedBlog : string = '';
  prevBlogDet: any;
  nextBlogDet: any;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.noOfBlogs = Object.keys(this.blogDetails).length;
    this.route.params.subscribe((blog:any)=>{
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.selectedBlog = this.blogDetails[Number(blog.blogid)];
      if(this.blogDetails[Number(blog.blogid)]){
           if(this.blogDetails[Number(blog.blogid)-1]){
            this.prevBlogDet = {
              blogid : Number(blog.blogid)-1,
              name:this.blogDetails[Number(blog.blogid)-1]
            }
           }else{
            this.prevBlogDet = {
              blogid : Number(this.noOfBlogs)-1,
              name:this.blogDetails[Number(this.noOfBlogs)-1]
            }
           }
           if(this.blogDetails[Number(blog.blogid)+1]){
            this.nextBlogDet = {
              blogid : Number(blog.blogid)+1,
              name:this.blogDetails[Number(blog.blogid)+1]
            }
          }else{
            this.nextBlogDet = {
              blogid :  (Number(blog.blogid)+1)-(Number(this.noOfBlogs)) ,
              name: this.blogDetails[(Number(blog.blogid)+1)-(Number(this.noOfBlogs))]
            }
          }
      }
    })
  }

  redirectToblog(blogid:any){
    if(this.blogDetails[Number(blogid)]){
      this.router.navigateByUrl(`/blog/${blogid}`)
    }
  }

}
